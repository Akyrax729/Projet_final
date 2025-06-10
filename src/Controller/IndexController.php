<?php

namespace App\Controller;

use App\Entity\Note;
use App\Form\FilterForm;
use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(NoteRepository $noteRepository, Request $request): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        $form = $this->createForm(FilterForm::class);

        $form->handleRequest($request);
        $note = $request->get('tag', 'all');

        if ($form->isSubmitted()&&$form->isValid()){

            // $note = $form->get('tag')->getData();
            // $note = $note->getLabel();           

            // $notes = $noteRepository->filterTags($note);


        } else {
            $notes = $noteRepository->findAll();
        };

        return $this->render('index/index.html.twig', [
            'notes' => $notes,
            'filterForm'=>$form->createView(),
        ]);
    }
}
