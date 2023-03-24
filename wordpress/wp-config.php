<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'radweb' );

/** Database username */
define( 'DB_USER', 'radoslaw_adamczyk' );

/** Database password */
define( 'DB_PASSWORD', 'xFVzWhRrzgrf2gUnNS' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1{p,^)*Y9^L4-rCUg[zo[mkQVrD8Pv=-8Ki?5%)3b{`Q=mztnE-Yh&jlUK1h73@%' );
define( 'SECURE_AUTH_KEY',  '}:|zpA20P3m`RZ_b~Y%g+n_A;vjBIZw;[,vrJ4`W:wr7kgSMTod?cssY4{j>I2@O' );
define( 'LOGGED_IN_KEY',    'UYj}nsc-re&5.*)E/Y,Tb9C5-n6?)EPBXmi7Bg.F,_<;>Z-tvuLB[YyG0AO^])Jx' );
define( 'NONCE_KEY',        '.*E-G}[4J;EvTV+o>U(MEP;.7ZY=;]=RZ+#=3bEh-+*XUHy5PmN2v9P?jMSr>MqZ' );
define( 'AUTH_SALT',        '<%}eo]IjiGG;OseqDzfI!8AT+E~x+|L$:u<W]dPXkuW;#3)ujH`x~]SFy#=Q_`HP' );
define( 'SECURE_AUTH_SALT', '+P@Y`V{dZ~rLEkvCzWweNJ3RoUzBc``BrPcK=akvB3@[0S)>tmiUZotp+1;eyRXj' );
define( 'LOGGED_IN_SALT',   'nlFm[nr$fex!e>L&0K3}C}:n-:,D=PiOL9omQV@(rZ@1~weC5W&s[DBH>2IvUnk$' );
define( 'NONCE_SALT',       's}t=b&XV`G~da+PbEu-;VJti=.R,@gCz_Yn}:20Qs<-2:K6NxHcV6Pzgv.CxEzC3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
