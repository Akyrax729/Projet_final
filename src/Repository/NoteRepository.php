<?php

namespace App\Repository;

use App\Entity\Note;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

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
                ->leftJoin('n.user', 'u')
                ->andWhere('u.id = :id')
                ->setParameter('id', $value)
                ->getQuery()
                ->getResult()
           ;
       }

       public function publicFilter(): array
       {
           return $this->createQueryBuilder('n')
                ->andWhere('n.public = 1')
                // ->setMaxResults(5)
                ->getQuery()
                ->getResult()
           ;
       }

    //    public function publicRando($public = true): array
    //    {
    //        return $this->createQueryBuilder('n')
    //             ->andWhere('n.public = :public')
    //             ->setParameter('public', $public)
    //             // ->orderBy('n.id', 'ASC')
    //             ->getQuery()
    //             ->getResult()
    //        ;
    //    }
       
    //    {
    //         $queryBuilder= $this->createQueryBuilder('n')
    //                     ->andWhere('r.id IN (:ids)')
    //                     ->setParameter('ids', $ids)
    //                     ->getQuery()->getResult();
    //    }

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
