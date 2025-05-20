<?php

namespace App\Repository;

use App\Entity\Note;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Note>
 */
class NoteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Note::class);
    }

    //    /**
    //     * @return Note[] Returns an array of Note objects
    //     */
       public function userFilter($value): array
       {
           return $this->createQueryBuilder('n')
                ->innerJoin('n.users', 'u')
                ->andWhere('u.id = :id')
                ->setParameter('id', $value)
                // ->orderBy('n.id', 'ASC')
                // ->setMaxResults(10)
                ->getQuery()
                ->getResult()
           ;
       }

    //    public function findOneBySomeField($value): ?Note
    //    {
    //        return $this->createQueryBuilder('n')
    //            ->andWhere('n.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
