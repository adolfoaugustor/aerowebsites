document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Header Efeito Scroll
  // ==========================================
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. Menu Mobile
  // ==========================================
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('navigation-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      if (navMenu.classList.contains('active')) {
        menuIcon.className = 'ph ph-x';
      } else {
        menuIcon.className = 'ph ph-list';
      }
    });

    // Fechar menu mobile ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.className = 'ph ph-list';
      });
    });
  }

  // ==========================================
  // 3. Sistema de Abas (Showcase)
  // ==========================================
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      
      // Remover classes ativas de todas as abas
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Adicionar classes ativas na aba e conteúdo correspondentes
      tab.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Expor função globalmente para chamadas do footer
  window.selectTab = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.click();
    }
  };

  // ==========================================
  // 4. Simulador do Gerenciador de Promoções
  // ==========================================
  const simProduct = document.getElementById('sim-product');
  const simPriceFrom = document.getElementById('sim-price-from');
  const simPriceTo = document.getElementById('sim-price-to');
  const simBadge = document.getElementById('sim-badge');
  
  const previewTitle = document.getElementById('preview-title-text');
  const previewFrom = document.getElementById('preview-from-text');
  const previewTo = document.getElementById('preview-to-text');
  const previewBadge = document.getElementById('preview-badge-text');
  const previewDiscount = document.getElementById('preview-discount-text');
  const previewPatrocinioNote = document.getElementById('preview-patrocinio-note');
  const previewLinkText = document.getElementById('preview-link-text');
  const btnSimulate = document.getElementById('btn-simulate-post');

  function updatePreview() {
    if (!simProduct || !previewTitle) return;

    // Atualiza o Título com negrito do WhatsApp (*)
    previewTitle.textContent = `*${simProduct.value || 'Nome do Produto'}*`;

    // Atualiza os Preços com formatação de WhatsApp (taxado ~ e negrito *)
    const fromValStr = simPriceFrom.value.replace(',', '.');
    const toValStr = simPriceTo.value.replace(',', '.');
    const fromVal = parseFloat(fromValStr);
    const toVal = parseFloat(toValStr);

    previewFrom.textContent = `❌ De: ~R$ ${simPriceFrom.value || '0,00'}~`;
    previewTo.textContent = `✅ *Por apenas: R$ ${simPriceTo.value || '0,00'}!*`;

    // Calcula Desconto
    if (!isNaN(fromVal) && !isNaN(toVal) && fromVal > 0) {
      const discountPercent = Math.round(((fromVal - toVal) / fromVal) * 100);
      if (discountPercent > 0 && discountPercent < 100) {
        previewDiscount.textContent = `(-${discountPercent}%)`;
        previewDiscount.style.display = 'inline';
      } else {
        previewDiscount.style.display = 'none';
      }
    } else {
      previewDiscount.style.display = 'none';
    }

    // Atualiza Etiqueta e Nota de Patrocínio
    const selectedBadge = simBadge.value;
    previewBadge.textContent = selectedBadge;

    if (selectedBadge.includes('ANÚNCIO PAGO')) {
      previewBadge.style.background = 'rgba(249, 212, 35, 0.15)';
      previewBadge.style.borderColor = 'rgba(249, 212, 35, 0.4)';
      previewBadge.style.color = '#F9D423';
      previewPatrocinioNote.innerHTML = '⚡ <strong>Anúncio Pago</strong> - Divulgação contratada de serviços/produtos locais.';
      if (previewLinkText) {
        previewLinkText.textContent = 'https://aerowebsites.com.br/divulgacao';
      }
    } else {
      previewBadge.style.background = 'rgba(255, 78, 80, 0.15)';
      previewBadge.style.borderColor = 'rgba(255, 78, 80, 0.3)';
      previewBadge.style.color = '#FF4E50';
      previewPatrocinioNote.innerHTML = 'Anúncio validado por Aero Websites.';
      if (previewLinkText) {
        if (selectedBadge.includes('CUPOM')) {
          previewLinkText.textContent = 'https://amzn.to/3AeroCupom';
        } else {
          previewLinkText.textContent = 'https://shope.ee/f4K39Aer';
        }
      }
    }
  }

  // Event Listeners para Atualização em Tempo Real
  if (simProduct) {
    [simProduct, simPriceFrom, simPriceTo, simBadge].forEach(elem => {
      elem.addEventListener('input', updatePreview);
      elem.addEventListener('change', updatePreview);
    });
  }

  // Simular clique do link do canal
  if (btnSimulate) {
    btnSimulate.addEventListener('click', (e) => {
      const href = btnSimulate.getAttribute('href');
      if (href === '#' || !href) {
        e.preventDefault();
        alert('Este botão é um link de acesso direto ao seu canal/grupo do WhatsApp ou Telegram. Você poderá configurar a URL correta diretamente no arquivo index.html substituindo o href do botão pelo link definitivo.');
      }
    });
  }

  // ==========================================
  // 5. Integração com WhatsApp (Formulário)
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim();
      const email = document.getElementById('client-email').value.trim();
      const phone = document.getElementById('client-phone').value.trim();
      const system = document.getElementById('client-system');
      const systemText = system.options[system.selectedIndex].text;
      const message = document.getElementById('client-message').value.trim();

      // Número da Aero Websites configurado conforme solicitação
      const whatsappNumber = '5585997072316';

      // Formatar mensagem para envio no WhatsApp
      const intro = `Olá Aero Websites! Gostaria de fazer uma solicitação de contato.`;
      const details = `\n\n*Dados de Contato:*\n- Nome: ${name}\n- E-mail: ${email}\n- WhatsApp: ${phone}\n- Sistema de Interesse: ${systemText}`;
      const msgContent = message ? `\n\n*Mensagem:*\n${message}` : '';
      
      const fullText = encodeURIComponent(intro + details + msgContent);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${fullText}`;

      // Redireciona o usuário para o WhatsApp em uma nova aba
      window.open(whatsappUrl, '_blank');
    });
  }

  // Preencher campo do formulário ao clicar em "Solicitar Demonstração" nas abas
  const demoButtons = document.querySelectorAll('.btn-cta-system');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const systemName = btn.getAttribute('data-system');
      const selectElement = document.getElementById('client-system');
      if (selectElement) {
        // Encontrar a opção que combina e selecionar
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].text.includes(systemName) || systemName.includes(selectElement.options[i].text)) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

});
