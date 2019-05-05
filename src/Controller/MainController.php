<?php
declare(strict_types=1);

namespace FastAdmin\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{

    /**
     * @return Response
     */
    public function index(): Response{
        return $this->render('index.html.twig');
    }

}