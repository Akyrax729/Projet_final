<?php

namespace App\Controller;

use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class PartialNoteController extends AbstractController
{
    #[Route('/filter-page', name: 'app_partial_note')]
    public function index(Request $request, NoteRepository $repository): JsonResponse
    {
        $filter = $request->get('filterGetValue', 'all');

        $notes = match($filter){
            'tags' => $repository->findBy(['tags' => $filter]),
        };
        // dd($notes);

        return $this->render('partial/note.html.twig', [
            'notes' => $notes,
        ]);
    }
}
