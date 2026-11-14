<?php
/**
 * comments.php — comentarios de un artículo (el spam lo filtra Akismet).
 */
if ( post_password_required() ) {
	return;
}
?>
<section class="comments" id="comments" aria-labelledby="titulo-comentarios">
	<h2 id="titulo-comentarios">Comentarios (<?php echo (int) get_comments_number(); ?>)</h2>

	<?php if ( have_comments() ) : ?>
		<ol class="comment-list">
			<?php
			wp_list_comments( array(
				'style'       => 'ol',
				'short_ping'  => true,
				'avatar_size' => 0,
				'callback'    => 'brote_comentario',
			) );
			?>
		</ol>
		<?php the_comments_navigation(); ?>
	<?php endif; ?>

	<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<p class="comment-meta">Los comentarios de este artículo están cerrados.</p>
	<?php endif; ?>

	<?php
	comment_form( array(
		'title_reply'         => 'Escribe tu duda',
		'label_submit'        => 'Comentar',
		'comment_field'       => '<p class="comment-form-comment"><label for="comment">Comentario</label><textarea id="comment" name="comment" placeholder="Cuéntanos qué le pasa a tu planta…" required></textarea></p>',
		'comment_notes_before' => '',
		'class_form'          => 'comment-form',
	) );
	?>
</section>
