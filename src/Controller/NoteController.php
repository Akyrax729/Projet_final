<?php

namespace App\Controller;

use App\Entity\Note;
use App\Form\NoteTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class NoteController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/addnote', name: 'app_addnote')]
    public function index(EntityManagerInterface $entityManager, Request $request): Response
    {

        $note = new Note();
        $form = $this->createform(NoteTypeForm::class, $note);
        $form->handleRequest($request);

        $getUser = $this->getUser();


        if ($form->isSubmitted() && $form->isValid()) {
            $note->setCreatedAt(new \DateTimeImmutable());
            $note->setModifiedAt(new \DateTimeImmutable());
            $note->setUser($getUser);
            $entityManager->persist($note);
            $entityManager->flush();

            $this->addFlash('success', 'Note ajoutée avec succès !');

            return $this->redirectToRoute('app_note');
        }

        return $this->render('note/add.html.twig', [
            'noteform' => $form->createView(),
        ]);
    }

        #[Route('/note/{id}/read', name: 'app_note_read')]
        public function read(Note $note): Response
        {   

            return $this->render('note/read.html.twig', [
                'note'=>$note,
            ]);
        }

    #[IsGranted('ROLE_USER')]
    #[Route('/{id}/edit', name: 'app_note_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Note $note, EntityManagerInterface $entityManager): Response
    {

        $get = $this->getUser();
        if($get != $note->getUser()){
            $this->addFlash('error', 'Vous ne pouvez pas modifier cette note !');
            return $this->redirectToRoute('app_index');
        }
        $form = $this->createForm(NoteTypeForm::class, $note);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $note->setModifiedAt(new \DateTimeImmutable());
            $entityManager->flush();

            return $this->redirectToRoute('app_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('note/update.html.twig', [
            'note' => $note,
            'noteform' => $form,
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/note/{id}/delete', name: 'app_note_delete')]
    public function delete(Note $note, Request $request, EntityManagerInterface $entityManager): Response
    {
        
        if($this->isCsrfTokenValid("COUCOU". $note->getId(), $request->get('_token'))){
            $entityManager->remove($note);
            $entityManager->flush();
            $this->addFlash("success","La suppression a été effectuée");
            return $this->redirectToRoute("app_index");
        }

        $this->addFlash("error", "Token invalide, suppression annulée.");
        return $this->redirectToRoute("app_index");

    }
}
