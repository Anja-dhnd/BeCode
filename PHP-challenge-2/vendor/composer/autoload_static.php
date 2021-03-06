<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit91f158249591a51edee77dd6f42abcb2
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/controller',
        ),
    );

    public static $classMap = array (
        'App\\DataBase' => __DIR__ . '/../..' . '/controller/DataBase.php',
        'App\\html' => __DIR__ . '/../..' . '/controller/html.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit91f158249591a51edee77dd6f42abcb2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit91f158249591a51edee77dd6f42abcb2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit91f158249591a51edee77dd6f42abcb2::$classMap;

        }, null, ClassLoader::class);
    }
}
