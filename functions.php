<?php
    add_action( 'wp_enqueue_scripts', function() {
        wp_enqueue_style( 'style-name', get_template_directory_uri() . '/style.css');
        wp_enqueue_style( 'compiled-scss', get_template_directory_uri() . '/build/index.css');
        wp_enqueue_style( 'tailwind-styles', get_template_directory_uri() . '/build/tailwind.css');
      //wp_enqueue_script('script-name1', get_template_directory_uri() . '/static/index.js', false, 'null', true);
        wp_enqueue_script(
            'script-name',
            get_template_directory_uri() . '/build/index.js',
            ['wp-element'],
            'null',
            true
        );
    });
/*  function debug_to_console($data) {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);
        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    } */
?>