<?php

namespace App\Controller;

use App\Entity\Note;
use App\Form\NoteTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class NoteController extends AbstractController
{
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
            $note->addUser($getUser);
            $entityManager->persist($note);
            $entityManager->flush();

            $this->addFlash('success', 'Note ajoutée avec succès !');

            return $this->redirectToRoute('app_index');
        }

        return $this->render('note/add.html.twig', [
            'noteform' => $form->createView(),
        ]);
    }


    #[Route('/{id}/edit', name: 'app_note_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Note $note, EntityManagerInterface $entityManager): Response
    {

        $get = $this->getUser();
        if($get == $note->getUsers()){
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
}
