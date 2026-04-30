// Cake data with detailed information
const cakeData = {
  1: {
    title: "Sky Adventure Cake",
    price: "700 php",
    image: "assets/cake1.png",
    description: "A delightful cake perfect for little adventurers featuring clouds, toy cars, and colorful balloons.",
    details: {
      size: "8 inches (serves 10-12)",
      flavor: "Vanilla sponge with chocolate buttercream",
      decorations: "Fondant clouds, toy cars, balloon toppers",
      leadTime: "3-5 days",
      customizable: "Yes - colors and theme can be adjusted"
    }
  },
  2: {
    title: "Racing Champion Cake",
    price: "500 php",
    image: "assets/cake2.png",
    description: "Themed cake featuring racing cars and checkered flags, perfect for speed enthusiasts.",
    details: {
      size: "7 inches (serves 8-10)",
      flavor: "Chocolate cake with mocha filling",
      decorations: "Racing car figurines, checkered flags, edible prints",
      leadTime: "2-4 days",
      customizable: "Yes - can add personalized name"
    }
  },
  3: {
    title: "Princess Dream Cake",
    price: "800 php",
    image: "assets/cake3.png",
    description: "Elegant pink cake with basket handle design and beautiful decorations for your little princess.",
    details: {
      size: "9 inches (serves 12-15)",
      flavor: "Strawberry cake with cream cheese frosting",
      decorations: "Fondant basket handle, edible flowers, pearls",
      leadTime: "4-6 days",
      customizable: "Yes - colors and decorations adjustable"
    }
  },
  4: {
    title: "Gothic Fantasy Cake",
    price: "800 php",
    image: "assets/cake4.png",
    description: "Unique purple-themed cake with mystical character topper, perfect for unique celebrations.",
    details: {
      size: "8 inches (serves 10-12)",
      flavor: "Ube cake with coconut cream filling",
      decorations: "Character topper, fondant clouds, themed elements",
      leadTime: "5-7 days",
      customizable: "Yes - character and theme can be changed"
    }
  },
  5: {
    title: "Wedding Elegance Cake",
    price: "700 php",
    image: "assets/cake5.png",
    description: "Beautiful 3-tier wedding cake with elegant blue floral design, perfect for your special day.",
    details: {
      size: "3-tier (serves 40-50)",
      flavor: "White cake with raspberry filling",
      decorations: "Blue sugar flowers, pearl details, elegant piping",
      leadTime: "7-10 days",
      customizable: "Yes - colors and tier sizes adjustable"
    }
  },
  6: {
    title: "Luxury Drip Cake",
    price: "650 php",
    image: "assets/cake6.png",
    description: "Stunning 2-tier cake with gold drip effect and macarons, perfect for elegant celebrations.",
    details: {
      size: "2-tier (serves 25-30)",
      flavor: "Red velvet with cream cheese frosting",
      decorations: "Gold drip, macarons, fresh flowers, gold leaf",
      leadTime: "4-6 days",
      customizable: "Yes - drip color and decorations adjustable"
    }
  },
  7: {
    title: "Barbie Princess Cake",
    price: "900 php",
    image: "assets/cake5.png",
    description: "Magical pink princess cake with Barbie topper, glittery stars, butterflies, and golden trim.",
    details: {
      size: "8 inches (serves 10-12)",
      flavor: "Vanilla cake with strawberry filling",
      decorations: "Barbie topper, glitter stars, butterflies, gold trim",
      leadTime: "5-7 days",
      customizable: "Yes - can change colors and add custom name"
    }
  },
  8: {
    title: "Flame Celebration Cake",
    price: "950 php",
    image: "assets/cake6.png",
    description: "Spectacular cake with golden flame effect topper, perfect for milestone celebrations.",
    details: {
      size: "2-tier (serves 30-35)",
      flavor: "Caramel cake with salted caramel filling",
      decorations: "Golden flame topper, floral accents, metallic finish",
      leadTime: "6-8 days",
      customizable: "Yes - numbers and colors can be customized"
    }
  },
  9: {
    title: "New Year 2026 Cake",
    price: "800 php",
    image: "assets/cake4.png",
    description: "Festive white cake decorated with gold coins and red ribbons, perfect for New Year celebrations.",
    details: {
      size: "9 inches (serves 15-18)",
      flavor: "White chocolate cake with vanilla mousse",
      decorations: "Gold coin chocolates, red ribbons, whipped cream rosettes",
      leadTime: "3-5 days",
      customizable: "Yes - can change year and ribbon colors"
    }
  },
  10: {
    title: "Coconut Classic Cake",
    price: "550 php",
    image: "assets/cake3.png",
    description: "Traditional coconut-covered cakes with fluffy texture, a Filipino favorite for any occasion.",
    details: {
      size: "7 inches each (serves 8-10 per cake)",
      flavor: "Vanilla sponge with coconut cream filling",
      decorations: "Shredded coconut coating, simple and elegant",
      leadTime: "1-2 days",
      customizable: "Limited - size and quantity adjustable"
    }
  },
  11: {
    title: "Ferris Wheel Cars Cake",
    price: "1200 php",
    image: "assets/cake2.png",
    description: "Amazing red cake with working ferris wheel topper and Lightning McQueen theme, a showstopper!",
    details: {
      size: "10 inches (serves 20-25)",
      flavor: "Chocolate cake with chocolate ganache",
      decorations: "Ferris wheel structure, Cars characters, checkered flags",
      leadTime: "7-10 days",
      customizable: "Yes - can personalize with name and age"
    }
  },
  12: {
    title: "Trevor Galaxy Cake",
    price: "750 php",
    image: "assets/cake1.png",
    description: "Dark blue galaxy-themed cake with personalized name, perfect for space enthusiasts.",
    details: {
      size: "8 inches (serves 10-12)",
      flavor: "Blueberry cake with cream cheese frosting",
      decorations: "Galaxy design, gold lettering, star accents",
      leadTime: "4-6 days",
      customizable: "Yes - name and colors fully customizable"
    }
  }
};

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

// Show cake details
function showCakeDetails(cakeId) {
  const cake = cakeData[cakeId];
  if (!cake) return;

  const content = `
    <div class="cake-details">
      <img src="${cake.image}" alt="${cake.title}" class="cake-details-img" />
      <h3>${cake.title}</h3>
      <p class="cake-details-price">${cake.price}</p>
      <p class="cake-details-desc">${cake.description}</p>
      <div class="cake-details-info">
        <h4>Details:</h4>
        <ul>
          <li><strong>Size:</strong> ${cake.details.size}</li>
          <li><strong>Flavor:</strong> ${cake.details.flavor}</li>
          <li><strong>Decorations:</strong> ${cake.details.decorations}</li>
          <li><strong>Lead Time:</strong> ${cake.details.leadTime}</li>
          <li><strong>Customizable:</strong> ${cake.details.customizable}</li>
        </ul>
      </div>
      <button class="submit-btn js-order-now">Order Now</button>
    </div>
  `;

  document.getElementById('cakeDetailsContent').innerHTML = content;
  openModal('cakeDetailsModal');

  // Add order now handler
  document.querySelector('.js-order-now').addEventListener('click', () => {
    closeAllModals();
    openModal('customInquiryModal');
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Profile dropdown toggle
  const profileBtn = document.getElementById('profileBtn');
  const profileDropdown = document.querySelector('.profile-dropdown');
  
  if (profileBtn) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove('active');
      }
    });
  }

  // Custom inquiry button
  document.querySelectorAll('.js-custom-inquiry').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('customInquiryModal');
    });
  });

  // View cake details
  document.querySelectorAll('.js-view-cake').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.birthday-card');
      const cakeId = card.getAttribute('data-cake-id');
      showCakeDetails(cakeId);
    });
  });

  // Close modal buttons
  document.querySelectorAll('.js-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Form submissions
  document.getElementById('customInquiryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    closeAllModals();
  });

  // Carousel functionality
  const track = document.querySelector('.design-track');
  const prevBtn = document.querySelector('.js-prev');
  const nextBtn = document.querySelector('.js-next');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const cardsToShow = 3;
  const totalCards = document.querySelectorAll('.card').length;
  const maxIndex = Math.ceil(totalCards / cardsToShow) - 1;

  function updateCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const gap = 24;
    const offset = -(currentIndex * (cardWidth * cardsToShow + gap * cardsToShow));
    track.style.transform = `translateX(${offset}px)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
});
