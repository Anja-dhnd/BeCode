<?php

namespace App;

class html
{
  public function getHtml()
  {
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
  }

  public function meta()
  {
    echo '<meta charset="UTF-8">';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">';
  }

  public function getGoogleFont()
  {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
    echo '<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet">
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Quicksand:wght@400;500;700&family=Varela+Round&display=swap" rel="stylesheet">
               <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
  }

  public function header()
  {
    echo '<header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    > <a class="navbar-brand mt-2 mt-lg-0" href="#">
    <img src="../assets/img/logo-cogip.png" alt="COGIP logo" height="80">
    </a>
      <!-- Left links -->
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../view/dashboard.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../view/invoicie.view.php">Invoices</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../view/companies.view.php">Companies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../view/contact.view.php">Contacts</a>
        </li>
        <!-- Navbar dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="../view/admin/addInvoice.php">Add invoice</a>
            </li>
            <li>
              <a class="dropdown-item" href="../view/admin/addCompany.php">Add company</a>
            </li>
            li>
              <a class="dropdown-item" href="../view/admin/addContact.php">Add contact</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="../session/profil.php" tabindex="-1" aria-disabled="true"
            >Profile</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="../session/logout.php" tabindex="-1" aria-disabled="true"
            >Log out</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
        </header>';
  }



  public function footer()
  {
    echo '<footer>';
    echo '<p class="footer__copyright" style="text-align: center">BeCode © 2021 </p>';
    echo '<p class="footer__slogan" style="text-align: center">Vive la COGIP !</p>';
    echo '</footer>';
  }
}
