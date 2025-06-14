<?php

namespace App\Form;

use Dom\Entity;
use App\Entity\Tag;
use App\Entity\Color;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class NoteTypeForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'Titre *',
                'attr' => [
                    'placeholder' => 'Titre de la note',
                ]
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Contenu',
                'attr' => [
                    'placeholder' => 'Contenu de la note',
                ]
            ])
            ->add('datedebut', DateType::class, [
                'label' => 'Date de début',
                'attr' => [
                    'placeholder' => 'Date de début',
                ],
                'widget' => 'single_text',
                'empty_data' => "",
                'required' => false,
            ])
            ->add('datefin', DateType::class, [
                'label' => 'Date de fin',
                'attr' => [
                    'placeholder' => 'Date de fin',
                ],
                'widget' => 'single_text',
                'empty_data' => "",
                'required' => false,
            ])
            ->add('tag', EntityType::class, [
                'class' => Tag::class,
                'choice_label' => 'label',
                'label' => 'Tags',
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('color',EntityType::class, [
                'class' => Color::class,
                'choice_label' => 'label',
                'label' => 'Couleur *',
                'placeholder' => 'Sélectionnez une couleur',
                'required' => true,
            ])  
            ->add('public', ChoiceType::class, [
                'label' => 'Voulez-vous rendre cette note publique ?',
                'choices' => [
                    'Oui' => 1,
                    'Non' => 0,
                ],
                'expanded' => true,
                'multiple' => false,
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
