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
define( 'DB_PASSWORD', 'hFzBpk8eSYhW4bof9bs9jvk3dnN' );

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
define( 'AUTH_KEY',         '#,!#m{eSvPZ./FFS;odd< ]dcYI-%%*h=X ,.A$cLu`9:LS1^pil_R8rsCmQGfGJ' );
define( 'SECURE_AUTH_KEY',  'vn8.NWDP5c ?ae=0;wo%tA{;}5I*_*p>)7Nt:XklC #@5iI<Sle5_Y:5?$^6SMxU' );
define( 'LOGGED_IN_KEY',    '|3k<e^H#f_3KO+ys]0 >#2vhZWJ(upv8C6z{I1%3c>>75M~58-MZHMnx.}_R}pIF' );
define( 'NONCE_KEY',        'RE@n>TVTu<XHd*(CQ4N2- hpIV9|[1|VCn~(Pal,RX&.SW`Vg:TO&8PJ8AC=hm_Q' );
define( 'AUTH_SALT',        ' m5<cm4pIS((@T&#GeRdPxal];p+8oqXdSA8Bv(Ee)gBFp g:5SLe;~ ,nR#4{9G' );
define( 'SECURE_AUTH_SALT', '=2OY8Be<YuAF;Ta:6XM7)T`A7l(9|0ST1$a+zUoGXAJp4wv*%?mbV,y{OX!ZIwZa' );
define( 'LOGGED_IN_SALT',   'R`wW&b%C*5}*c1B~?QIO}T~G~:2oP;4]El)=r{ilCBnH~hIldrs=WZ|P)/}RJQ&X' );
define( 'NONCE_SALT',       'YQ/q~w&-=ukAw /h}w*H& k5iEp&;_B:`lF,mPj:S6A&@p2M4hnwM=<%U;ac>z,{' );

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
