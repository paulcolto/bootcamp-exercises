<?php $site_url = 'http://www.cbp-exercises.test:8081/day32-SSR-Laravel-views-and-Laravel-Blade/eshop-include-require/'; ?>
<div id="topmenu">
    <nav>
        <a href="<?= $site_url ?>">My HOME</a>
        <a href="<?= $site_url ?>/products.php">products</a>
        <a href="<?= $site_url ?>/contact.php">contact form</a>
    </nav>

    <!-- cart-bar -->
    <?php include 'cart-bar.php'; ?>
</div>