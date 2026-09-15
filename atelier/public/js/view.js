// Vue : dessine la conversation, sans aucune règle de réponse.

const ETIQUETTES = {
  user: 'Vous',
  assistant: 'Cap Web'
};

export function renderMessages(messages, container) {
  const lignes = messages.map((msg) => {
    const li = document.createElement('li');
    li.dataset.role = msg.role;
    // textContent : le texte reste du texte, jamais du HTML.
    li.textContent = `${ETIQUETTES[msg.role]} : ${msg.text}`;
    return li;
  });
  container.replaceChildren(...lignes);
}
