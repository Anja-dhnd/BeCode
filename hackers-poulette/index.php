<?php require "assets/vendor/phpmailer/phpmailer/src/Exception.php" ?>
<?php require "assets/vendor/phpmailer/phpmailer/src/SMTP.php" ?>
<?php require "assets/vendor/phpmailer/phpmailer/src/PHPMailer.php" ?>
<?php require "assets/php/var.php" ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/output.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bellota&display=swap" rel="stylesheet">

    <title>Contact form</title>
</head>

<body class="bg-primary">


    <main>

        <div class="flex items-center justify-center mt-24 mb-24 bg-primary">
            <div class="grid w-11/12 bg-white rounded-lg shadow-xl md:w-9/12 lg:w-1/2">
                <div class="flex justify-center py-2">
                    <div class="flex border-2 rounded-full border-primary ">
                        <img src="assets/img/hackers-poulette-logo.png" alt="logo" width="200" height="200">
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="flex">
                        <h1 class="text-xl text-gray-800 font-bellota md:text-2xl">Contact form</h1>
                    </div>

                </div>
                <form action="" method="post">
                    <div class="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 md:gap-8 mx-7">
                        <div class="grid grid-cols-1">
                            <label for="name" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">First name</label>
                            <input name="fname" id="nameTag" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" type="text" placeholder="First name" />
                            <input type="text" id="mid_name" name="mid_name" class="hidden" value="">
                        </div>
                        <div class="grid grid-cols-1">
                            <label for="lastname" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Last name</label>
                            <input name="lname" id="lastnameTag" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label for="mail" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">E-Mail</label>
                        <input name="mail" id="emailTag" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" type="text" placeholder="E-mail" />
                    </div>



                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label for="gender" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Gender</label>
                        <select name="gender" id="genderTag" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                            <option>M</option>
                            <option>F</option>
                            <option>Non-binary</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label for="country" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Country</label>
                        <input id="countryTag" name="country" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" type="text" placeholder="Country" />
                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label for="subject" class="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light" for="subject">Subject</label>

                        <select name="subject" id="subjectTag" class="px-3 py-2 mt-1 border-2 rounded-lg border-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">

                            <option value="1">Other</option>
                            <option value="2">Missing parts</option>
                            <option value="3">Faulty item</option>

                        </select>

                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label for="message" class="mb-1 text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Message</label>
                        <div class='flex items-center justify-center w-full'>
                            <textarea name="message" placeholder="Write your message here..." id="messageTag" class='flex flex-col w-full h-32 border-2 border-secondary hover:border-primary group'>

                        </textarea>
                        </div>
                    </div>

                    <div class='flex items-center justify-center gap-4 pt-5 pb-5 md:gap-8'>
                        <button class='w-auto px-4 py-2 font-medium text-white bg-gray-500 rounded-lg shadow-xl hover:bg-gray-700'>Cancel</button>
                        <button class='w-auto px-4 py-2 font-medium text-white rounded-lg shadow-xl bg-secondary hover:bg-primary'>Submit</button>
                    </div>

            </div>
        </div>

        </form>


    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</body>

</html>