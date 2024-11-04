<template>
  <div class="wrapper">
    <div class="container">
      <h1>Contact</h1>
      <P>お気軽にご連絡ください</P>
      <form method="POST">
        <label htmlFor="name">お名前</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="name">ご用件</label>
        <textarea name="message" rows="10" id="textarea" required></textarea>
        <button type="submit">送信</button>
    </form>
    </div>
  </div>
</template>