<?php

namespace App\Form;

use Dom\Entity;
use App\Entity\Tag;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class NoteTypeForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'Titre',
                'attr' => [
                    'placeholder' => 'Titre de la note',
                ]
            ])
            ->add('content', TextType::class, [
                'label' => 'Contenu *',
                'attr' => [
                    'placeholder' => 'Contenu de la note',
                ]
            ])
            ->add('date_debut', DateType::class, [
                'label' => 'Date de début',
                'attr' => [
                    'placeholder' => 'Date de début',
                ]
            ])
            ->add('date_fin', DateType::class, [
                'label' => 'Date de fin',
                'attr' => [
                    'placeholder' => 'Date de fin',
                ]
            ])
            ->add('tags', EntityType::class, [
                'class' => Tag::class,
                'choice_label' => 'label',
                'label' => 'Tags',
                'multiple' => true,
                'expanded' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
