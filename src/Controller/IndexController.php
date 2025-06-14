<?php

namespace App\Controller;

use App\Repository\NoteRepository;
use Random\Randomizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(NoteRepository $noteRepository): Response
    {

        $notes = $noteRepository->publicFilter();
        shuffle($notes);

        return $this->render('index/index.html.twig', [
            'notes' => $notes,

        ]);
    }
}
