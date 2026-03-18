/* ===========================
   DevToolkit - script.js
   GitHub Finder + Quiz + Nav
=========================== */

/* ===========================
   NAVBAR — Hamburger + Active
=========================== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu on nav link click (mobile)
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinkItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ===========================
   GITHUB PROFILE FINDER
=========================== */
const githubInput = document.getElementById("githubInput");
const searchBtn = document.getElementById("searchBtn");
const spinner = document.getElementById("spinner");
const errorBox = document.getElementById("errorBox");
const errorMsg = document.getElementById("errorMsg");
const profileCard = document.getElementById("profileCard");
const reposSection = document.getElementById("reposSection");

// Elements inside profile card
const avatar = document.getElementById("avatar");
const profileName = document.getElementById("profileName");
const profileLogin = document.getElementById("profileLogin");
const profileBio = document.getElementById("profileBio");
const profileLocation = document.getElementById("profileLocation");
const profileBlog = document.getElementById("profileBlog");
const profileJoined = document.getElementById("profileJoined");
const statRepos = document.getElementById("statRepos");
const statFollowers = document.getElementById("statFollowers");
const statFollowing = document.getElementById("statFollowing");
const statGists = document.getElementById("statGists");
const profileLink = document.getElementById("profileLink");
const reposGrid = document.getElementById("reposGrid");

// Search on button click
searchBtn.addEventListener("click", () => {
  const username = githubInput.value.trim();
  if (!username) {
    showError("Please enter a GitHub username.");
    return;
  }
  fetchGitHubUser(username);
});

// Search on Enter key
githubInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const username = githubInput.value.trim();
    if (!username) {
      showError("Please enter a GitHub username.");
      return;
    }
    fetchGitHubUser(username);
  }
});

// Fetch user profile
async function fetchGitHubUser(username) {
  showSpinner();
  hideError();
  hideProfile();

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      throw new Error("User not found. Please check the username.");
    }
    if (response.status === 403) {
      throw new Error("API rate limit exceeded. Please try again in a minute.");
    }
    if (!response.ok) {
      throw new Error("Something went wrong. Please try again.");
    }

    const data = await response.json();
    displayProfile(data);
    fetchRepos(username);
  } catch (error) {
    hideSpinner();
    showError(error.message);
  }
}

// Display profile card
function displayProfile(data) {
  hideSpinner();

  avatar.src = data.avatar_url;
  avatar.alt = data.login;

  profileName.textContent = data.name || data.login;
  profileLogin.textContent = `@${data.login}`;
  profileBio.textContent = data.bio || "No bio available.";

  profileLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location || "Not specified"}`;
  profileBlog.innerHTML = data.blog
    ? `<i class="fa-solid fa-link"></i> <a href="${data.blog}" target="_blank" style="color:var(--accent)">${data.blog}</a>`
    : `<i class="fa-solid fa-link"></i> No website`;

  const joinDate = new Date(data.created_at);
  const formattedDate = joinDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  profileJoined.innerHTML = `<i class="fa-solid fa-calendar"></i> Joined ${formattedDate}`;

  statRepos.textContent = formatNumber(data.public_repos);
  statFollowers.textContent = formatNumber(data.followers);
  statFollowing.textContent = formatNumber(data.following);
  statGists.textContent = formatNumber(data.public_gists);

  profileLink.href = data.html_url;

  profileCard.classList.add("show");
}

// Fetch top 6 repos
async function fetchRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`,
    );

    if (!response.ok) throw new Error("Could not fetch repositories.");

    const repos = await response.json();
    displayRepos(repos);
  } catch (error) {
    // Repos failing shouldn't break profile — silently skip
    console.warn("Repos fetch failed:", error.message);
  }
}

// Display repos grid
function displayRepos(repos) {
  reposGrid.innerHTML = "";

  if (repos.length === 0) {
    reposGrid.innerHTML = `<p style="color:var(--text-secondary); font-size:0.9rem;">No public repositories found.</p>`;
    reposSection.classList.add("show");
    return;
  }

  repos.forEach((repo) => {
    const card = document.createElement("div");
    card.classList.add("repo-card");

    card.innerHTML = `
      <a href="${repo.html_url}" target="_blank" class="repo-name">
        <i class="fa-solid fa-book" style="font-size:0.75rem"></i>
        ${repo.name}
      </a>
      <p class="repo-desc">${repo.description || "No description provided."}</p>
      <div class="repo-meta">
        ${repo.language ? `<span class="repo-lang">${repo.language}</span>` : ""}
        <span class="repo-stars">
          <i class="fa-regular fa-star"></i> ${formatNumber(repo.stargazers_count)}
        </span>
        <span class="repo-forks">
          <i class="fa-solid fa-code-fork"></i> ${formatNumber(repo.forks_count)}
        </span>
      </div>
    `;

    reposGrid.appendChild(card);
  });

  reposSection.classList.add("show");
}

// Helper: format large numbers
function formatNumber(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num;
}

// Helper: show/hide UI states
function showSpinner() {
  spinner.classList.add("show");
}
function hideSpinner() {
  spinner.classList.remove("show");
}
function showError(msg) {
  errorMsg.textContent = msg;
  errorBox.classList.add("show");
}
function hideError() {
  errorBox.classList.remove("show");
}
function hideProfile() {
  profileCard.classList.remove("show");
  reposSection.classList.remove("show");
}

/* ===========================
   QUIZ
=========================== */
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const quizQuestions = [
  {
    category: "HTML",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: 1,
  },
  {
    category: "HTML",
    question: 'What does the "alt" attribute in an <img> tag do?',
    options: [
      "Sets the image alignment",
      "Provides alternate text if image fails to load",
      "Sets the image size",
      "Links to another image",
    ],
    answer: 1,
  },
  {
    category: "CSS",
    question: "Which CSS property is used to make a flex container?",
    options: [
      "display: block",
      "display: grid",
      "display: flex",
      "display: inline",
    ],
    answer: 2,
  },
  {
    category: "CSS",
    question: 'What does "z-index" control in CSS?',
    options: [
      "Zoom level of an element",
      "Stacking order of elements",
      "Horizontal position",
      "Transparency of an element",
    ],
    answer: 1,
  },
  {
    category: "CSS",
    question: "Which media query targets screens smaller than 600px?",
    options: [
      "@media (min-width: 600px)",
      "@media (max-width: 600px)",
      "@media (width: 600px)",
      "@media screen (600px)",
    ],
    answer: 1,
  },
  {
    category: "JavaScript",
    question: "Which method is used to fetch data from an API in JavaScript?",
    options: ["getData()", "fetch()", "request()", "http.get()"],
    answer: 1,
  },
  {
    category: "JavaScript",
    question: 'What does "DOM" stand for?',
    options: [
      "Document Object Model",
      "Data Object Management",
      "Dynamic Output Method",
      "Document Oriented Model",
    ],
    answer: 0,
  },
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    category: "JavaScript",
    question: 'What will "typeof null" return in JavaScript?',
    options: ["null", "undefined", "object", "string"],
    answer: 2,
  },
  {
    category: "HTML",
    question: "Which HTML attribute is used to make an input field required?",
    options: ["validate", "required", "mandatory", "must"],
    answer: 1,
  },
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let timer = null;
let timeLeft = 20;
const TIMER_DURATION = 20;
const optionLetters = ["A", "B", "C", "D"];

// Elements
const quizStart = document.getElementById("quizStart");
const quizGame = document.getElementById("quizGame");
const quizResult = document.getElementById("quizResult");
const startQuizBtn = document.getElementById("startQuizBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const quizProgress = document.getElementById("quizProgress");
const timerDisplay = document.getElementById("timerDisplay");
const timerBox = document.querySelector(".quiz-timer-box");
const progressBarFill = document.getElementById("progressBarFill");
const quizCategory = document.getElementById("quizCategory");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const finalScore = document.getElementById("finalScore");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultMsg = document.getElementById("resultMsg");
const resultBar = document.getElementById("resultBar");

// Show quiz start screen by default
quizStart.classList.add("show");

// Start quiz
startQuizBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizStart.classList.remove("show");
  quizGame.classList.add("show");
  setTimeout(() => loadQuestion(), 50);
});

// Restart quiz
restartQuizBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizResult.classList.remove("show");
  quizGame.classList.add("show");
  loadQuestion();
});

// Load current question
function loadQuestion() {
  clearInterval(timer);
  timeLeft = TIMER_DURATION;

  const q = quizQuestions[currentQuestion];

  quizProgress.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  progressBarFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  quizCategory.textContent = q.category;
  quizQuestion.textContent = q.question;
  timerDisplay.textContent = timeLeft;
  timerBox.classList.remove("danger");

  // Render options
  quizOptions.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-option");
    btn.innerHTML = `
  <span class="option-letter">${optionLetters[index]}</span>
  <span class="option-text">${escapeHTML(option)}</span>
`;
    btn.addEventListener("click", () => handleAnswer(index, btn));
    quizOptions.appendChild(btn);
  });

  startTimer();
}

// Timer logic
function startTimer() {
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 5) {
      timerBox.classList.add("danger");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      // Time up — show correct answer
      revealAnswer(-1);
      setTimeout(nextQuestion, 1200);
    }
  }, 1000);
}

// Handle answer selection
function handleAnswer(selectedIndex, btn) {
  clearInterval(timer);
  const correct = quizQuestions[currentQuestion].answer;

  if (selectedIndex === correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    revealAnswer(selectedIndex);
  }

  // Disable all options
  document
    .querySelectorAll(".quiz-option")
    .forEach((opt) => (opt.disabled = true));

  setTimeout(nextQuestion, 1000);
}

// Reveal correct answer
function revealAnswer(selectedIndex) {
  const correct = quizQuestions[currentQuestion].answer;
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((opt) => (opt.disabled = true));
  options[correct].classList.add("correct");
}

// Go to next question or show result
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show result screen
function showResult() {
  quizGame.classList.remove("show");
  quizResult.classList.add("show");

  finalScore.textContent = score;

  const percent = (score / quizQuestions.length) * 100;

  // Animate result bar
  setTimeout(() => {
    resultBar.style.width = `${percent}%`;
    if (percent < 50) {
      resultBar.style.background = "var(--accent-red)";
    } else if (percent < 80) {
      resultBar.style.background = "var(--accent-orange)";
    } else {
      resultBar.style.background = "var(--accent-green)";
    }
  }, 100);

  // Result message based on score
  if (score <= 3) {
    resultEmoji.textContent = "😅";
    resultTitle.textContent = "Keep Practicing!";
    resultMsg.textContent =
      "Review the basics of HTML, CSS, and JavaScript. You'll get there!";
  } else if (score <= 6) {
    resultEmoji.textContent = "👍";
    resultTitle.textContent = "Good Effort!";
    resultMsg.textContent =
      "Decent score! A little more practice and you'll nail it.";
  } else if (score <= 8) {
    resultEmoji.textContent = "🎯";
    resultTitle.textContent = "Great Job!";
    resultMsg.textContent = "You clearly know your web dev fundamentals!";
  } else {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "Excellent!";
    resultMsg.textContent =
      "Outstanding! You have a strong grasp of HTML, CSS, and JavaScript.";
  }
}
