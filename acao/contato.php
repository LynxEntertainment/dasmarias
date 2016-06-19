<?php

$email = $_POST["email"];
$para = "saanyrock@gmail.com";
$nome = $_POST["nome"];
$assunto = $_POST["assunto"];
$mensagem = $_POST["mensagem"];

$header = "Content-Type: text/hmtl; charset= uft-8\n";
$header .="From: $email Replay-to: $email\n";
mail($para, $assunto, $mensagem, $header);

$para = $email;
$mensagem = "Seu email foi enviado para Das Marias Semijoias, Agradecemos seu contato.";

mail($para, $assunto, $mensagem, $headers);
$header = "From: $email Reply-to: " . $email . "/r/n";

echo "<script>window.location='../index.php?pagina=contato';</script>";
?>