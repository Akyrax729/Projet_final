<?php

namespace App\Controller;

use App\Entity\Note;
use App\Form\FilterForm;
use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class NoteIndexController extends AbstractController
{
    #[Route('/note', name: 'app_note')]
    public function noteindex(NoteRepository $noteRepository): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_login'); 
        }

        $notes = $noteRepository->userFilter($user);

        return $this->render('note/note.html.twig', [
            'notes' => $notes,
        ]);
    }
}
