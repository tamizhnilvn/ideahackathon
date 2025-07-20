// Application Data from provided JSON
const appData = {
    cities: ["Abohar", "Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Akola", "Alappuzha", "Aligarh", "Allahabad", "Alwar", "Amaravati", "Ambala", "Ambarnath", "Ambikapur", "Amravati", "Amritsar", "Amroha", "Anand", "Anantapur", "Anantnag", "Arrah", "Asansol", "Aurangabad", "Baharampur", "Bahraich", "Balasore", "Banda", "Baramulla", "Baran", "Bardhaman", "Bareilly", "Baripada", "Batala", "Bathinda", "Begusarai", "Belgaum", "Bellary", "Bengaluru", "Berhampur", "Bhadrak", "Bhagalpur", "Bharatpur", "Bhavnagar", "Bhilai", "Bhilwara", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bikaner", "Bilaspur", "Bokaro", "Bongaigaon", "Bulandshahr", "Chandigarh", "Champhai", "Chandrapur", "Chennai", "Chhapra", "Churu", "Coimbatore", "Cuttack", "Davanagere", "Dehradun", "Delhi", "Deoghar", "Dewas", "Dhanbad", "Dharamshala", "Dharmanagar", "Dharwad", "Dhule", "Dibrugarh", "Dimapur", "Dindigul", "Dispur", "Diu", "Durg", "Durgapur", "English Bazar", "Erode", "Etawah", "Faridabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gandhidham", "Gandhinagar", "Gangtok", "Gaya", "Geyzing", "Ghaziabad", "Giridih", "Gorakhpur", "Gulbarga", "Guntur", "Gurgaon", "Guwahati", "Gwalior", "Haldwani", "Haldia", "Hamirpur", "Hapur", "Hardoi", "Haridwar", "Hathras", "Hazaribagh", "Hisar", "Hoshiarpur", "Hosur", "Howrah", "Hubli", "Hugli-Chinsurah", "Hyderabad", "Ichalkaranji", "Imphal", "Indore", "Itanagar", "Jabalpur", "Jagdalpur", "Jaipur", "Jalgaon", "Jalpaiguri", "Jalna", "Jalandhar", "Jammu", "Jamnagar", "Jamshedpur", "Jaunpur", "Jodhpur", "Jorhat", "Jowai", "Junagadh", "Kadapa", "Kailashahar", "Kakinada", "Kanchipuram", "Kannur", "Kanpur", "Karaikal", "Kargil", "Karimnagar", "Karnal", "Karur", "Kashipur", "Kathua", "Katihar", "Katni", "Kavaratti", "Khammam", "Khanna", "Kharagpur", "Kishangarh", "Kochi", "Kohima", "Kolhapur", "Kolkata", "Kollam", "Korba", "Kota", "Kottayam", "Kozhikode", "Kullu", "Kumarakonam", "Kurnool", "Lakhimpur", "Latur", "Leh", "Loni", "Lucknow", "Ludhiana", "Lunglei", "Madurai", "Mahe", "Mahbubnagar", "Malappuram", "Malerkotla", "Mandi", "Mangan", "Mangalore", "Mapusa", "Margao", "Mathura", "Mau", "Meerut", "Mirzapur", "Modinagar", "Moga", "Moradabad", "Morbi", "Mumbai", "Munger", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nagercoil", "Nagpur", "Naharlagun", "Nalgonda", "Namchi", "Nashik", "Navsari", "Nellore", "New Delhi", "Nizamabad", "Noida", "Nongstoin", "Orai", "Palakkad", "Pali", "Panaji", "Panipat", "Panvel", "Parbhani", "Pasighat", "Pathankot", "Patiala", "Patna", "Phagwara", "Phusro", "Ponda", "Port Blair", "Pudukkottai", "Puducherry", "Pune", "Purnia", "Raebareli", "Raiganj", "Raipur", "Rajahmundry", "Rajamundry", "Rajkot", "Rajnandgaon", "Ramagundam", "Rampur", "Ranchi", "Ranipet", "Ratlam", "Rewa", "Rishikesh", "Rohtak", "Roorkee", "Rourkela", "Rudrapur", "Sagar", "Saharanpur", "Saiha", "Salem", "Sambalpur", "Sambhal", "Sangli", "Satna", "Shahjahanpur", "Shillong", "Shimla", "Shimoga", "Sikar", "Silchar", "Siliguri", "Silvassa", "Singrauli", "Sitapur", "Sivakasi", "Solan", "Soladepur", "Solapur", "Sonipat", "Sri Ganganagar", "Srinagar", "Surat", "Tezpur", "Thanjavur", "Thiruvananthapuram", "Thoothukudi", "Thrissur", "Thoubal", "Tinsukia", "Tirunelveli", "Tirupati", "Tiruppur", "Tiruchirappalli", "Tumkur", "Tura", "Tuensang", "Udaipur", "Udhampur", "Udhagamandalam", "Ujjain", "Ukhrul", "Una", "Unnao", "Vadodara", "Vaniyambadi", "Varanasi", "Vasco da Gama", "Vellore", "Vijayawada", "Visakhapatnam", "Wokha", "Yamunanagar", "Yanam"],
    
    houseTypes: {
        "1BHK": {"minArea": 400, "maxArea": 600, "typical": 500, "description": "1 Bedroom Hall Kitchen"},
        "2BHK": {"minArea": 650, "maxArea": 1000, "typical": 800, "description": "2 Bedroom Hall Kitchen"}, 
        "3BHK": {"minArea": 1000, "maxArea": 1500, "typical": 1200, "description": "3 Bedroom Hall Kitchen"},
        "4BHK": {"minArea": 1200, "maxArea": 2000, "typical": 1600, "description": "4 Bedroom Hall Kitchen"},
        "Villa": {"minArea": 1500, "maxArea": 2500, "typical": 2000, "description": "Independent Villa"},
        "Kothi": {"minArea": 1800, "maxArea": 3000, "typical": 2400, "description": "Independent Kothi"}
    },
    
    cityRates: {
        tier1: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"],
        tier2: ["Jaipur", "Lucknow", "Kochi", "Indore", "Bhopal", "Coimbatore", "Surat", "Nagpur", "Patna", "Vadodara", "Agra", "Nashik", "Puducherry"],
        baseCosts: {
            tier1: {"basic": 1800, "standard": 2400, "premium": 2800},
            tier2: {"basic": 1400, "standard": 1900, "premium": 2400}, 
            tier3: {"basic": 1200, "standard": 1600, "premium": 2000}
        }
    },
    
    companies: {
        cement: [
            {"name": "UltraTech", "basic": 358, "standard": 398, "premium": 438},
            {"name": "ACC", "basic": 365, "standard": 405, "premium": 445},
            {"name": "Ambuja", "basic": 360, "standard": 400, "premium": 440},
            {"name": "Shree Cement", "basic": 362, "standard": 402, "premium": 442},
            {"name": "Dalmia", "basic": 368, "standard": 408, "premium": 448},
            {"name": "JK Cement", "basic": 370, "standard": 410, "premium": 450}
        ],
        steel: [
            {"name": "Tata Steel", "basic": 72, "standard": 79, "premium": 86},
            {"name": "JSW Steel", "basic": 70, "standard": 77, "premium": 84},
            {"name": "SAIL", "basic": 71, "standard": 78, "premium": 85},
            {"name": "Jindal Steel", "basic": 73, "standard": 80, "premium": 87},
            {"name": "Kamdhenu", "basic": 74, "standard": 81, "premium": 88}
        ],
        bricks: [
            {"name": "Bharat Bricks", "basic": 7, "standard": 10, "premium": 13},
            {"name": "Eco Bricks", "basic": 8, "standard": 11, "premium": 14},
            {"name": "Classic Bricks", "basic": 9, "standard": 12, "premium": 15}
        ]
    },
    
    breakdownPercentages: {
        materials: 0.55,
        labor: 0.30,
        architect: 0.08,
        misc: 0.07
    },
    
    materialBreakdown: {
        cement: 0.25,
        steel: 0.30,
        bricks: 0.20,
        sand: 0.15,
        others: 0.10
    }
};

// Global State
let currentState = {
    user: null,
    area: 0,
    city: '',
    houseType: '',
    quality: '',
    totalCost: 0,
    costPerSqft: 0,
    breakdown: {},
    materialBreakdown: {},
    isCalculating: false,
    selectedMaterial: 'cement'
};

let breakdownChart = null;
let filteredCities = [...appData.cities];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    setupEventListeners();
    initializeDropdowns();
    showLoginPage();
});

// Show Login Page
function showLoginPage() {
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage && mainApp) {
        loginPage.classList.remove('hidden');
        mainApp.classList.add('hidden');
        console.log('Login page displayed');
    }
}

// Show Main App
function showMainApp() {
    const loginPage = document.getElementById('loginPage');
    const mainApp = document.getElementById('mainApp');
    
    if (loginPage && mainApp) {
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        console.log('Main app displayed');
        
        // Initialize with demo data
        setTimeout(() => {
            const lengthInput = document.getElementById('length');
            const widthInput = document.getElementById('width');
            const citySearch = document.getElementById('citySearch');
            const houseTypeSelect = document.getElementById('houseType');
            
            if (lengthInput && widthInput && citySearch && houseTypeSelect) {
                lengthInput.value = '40';
                widthInput.value = '30';
                calculateFromDimensions();
                citySearch.value = 'Puducherry';
                currentState.city = 'Puducherry';
                houseTypeSelect.value = '2BHK';
                currentState.houseType = '2BHK';
                updateCalculations();
            }
        }, 500);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Login form - using both form submit and button click
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            console.log('Form submit event triggered');
            e.preventDefault();
            handleLogin(e);
        });
    }
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            console.log('Login button clicked');
            e.preventDefault();
            handleLogin(e);
        });
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Dimension toggle buttons
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    if (toggleBtns) {
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const mode = this.dataset.mode;
                toggleDimensionMode(mode);
            });
        });
    }

    // Input field listeners with debouncing
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const totalAreaInput = document.getElementById('totalArea');
    
    if (lengthInput) {
        lengthInput.addEventListener('input', debounce(calculateFromDimensions, 300));
    }
    if (widthInput) {
        widthInput.addEventListener('input', debounce(calculateFromDimensions, 300));
    }
    if (totalAreaInput) {
        totalAreaInput.addEventListener('input', debounce(calculateFromArea, 300));
    }
    
    // City search
    const citySearch = document.getElementById('citySearch');
    if (citySearch) {
        citySearch.addEventListener('input', handleCitySearch);
        citySearch.addEventListener('focus', showCityDropdown);
    }
    
    // Global click handler for city dropdown
    document.addEventListener('click', hideCityDropdown);
    
    // House type selector
    const houseTypeSelect = document.getElementById('houseType');
    if (houseTypeSelect) {
        houseTypeSelect.addEventListener('change', function() {
            console.log('House type changed to:', this.value);
            currentState.houseType = this.value;
            updateCalculations();
        });
    }

    // Quality selector
    const qualityOptions = document.querySelectorAll('.quality-option');
    if (qualityOptions) {
        qualityOptions.forEach(option => {
            option.addEventListener('click', function() {
                selectQuality(this.dataset.quality);
            });
        });
    }

    // Company tabs
    const companyTabs = document.querySelectorAll('.company-tab');
    if (companyTabs) {
        companyTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                selectMaterialTab(this.dataset.material);
            });
        });
    }

    // Action buttons
    const emailBtn = document.getElementById('emailEstimate');
    const shareBtn = document.getElementById('shareEstimate');
    const saveBtn = document.getElementById('saveQuote');
    
    if (emailBtn) {
        emailBtn.addEventListener('click', emailEstimate);
    }
    if (shareBtn) {
        shareBtn.addEventListener('click', shareEstimate);
    }
    if (saveBtn) {
        saveBtn.addEventListener('click', saveQuote);
    }
}

// Handle Login with improved validation and debugging
function handleLogin(e) {
    console.log('handleLogin called');
    e.preventDefault();
    
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    
    console.log('Form inputs found:', {
        fullName: !!fullNameInput,
        email: !!emailInput,
        phone: !!phoneInput,
        password: !!passwordInput
    });
    
    if (!fullNameInput || !emailInput || !phoneInput || !passwordInput) {
        showStatusMessage('Form elements not found. Please refresh the page.', 'error');
        return;
    }
    
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    
    console.log('Form values:', { fullName, email, phone, passwordLength: password.length });
    
    // Clear previous error states
    [fullNameInput, emailInput, phoneInput, passwordInput].forEach(input => {
        input.style.borderColor = '';
    });
    
    // Detailed validation with visual feedback
    let hasErrors = false;
    
    if (!fullName || fullName.length < 2) {
        showStatusMessage('Please enter a valid full name (at least 2 characters).', 'error');
        fullNameInput.style.borderColor = 'var(--color-error)';
        fullNameInput.focus();
        hasErrors = true;
    } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showStatusMessage('Please enter a valid email address.', 'error');
        emailInput.style.borderColor = 'var(--color-error)';
        emailInput.focus();
        hasErrors = true;
    } else if (!phone || !/^\d{10}$/.test(phone)) {
        showStatusMessage('Phone number must be exactly 10 digits.', 'error');
        phoneInput.style.borderColor = 'var(--color-error)';
        phoneInput.focus();
        hasErrors = true;
    } else if (!password || password.length < 8) {
        showStatusMessage('Password must be at least 8 characters long.', 'error');
        passwordInput.style.borderColor = 'var(--color-error)';
        passwordInput.focus();
        hasErrors = true;
    }
    
    if (hasErrors) {
        console.log('Validation failed');
        return;
    }
    
    console.log('Validation passed, proceeding with login');
    
    // Show loading
    const loginBtn = document.querySelector('.login-btn');
    const btnText = loginBtn.querySelector('.btn-text');
    const btnLoader = loginBtn.querySelector('.btn-loader');
    
    if (btnText && btnLoader) {
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');
    }
    loginBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        console.log('Login successful, transitioning to main app');
        currentState.user = { fullName, email, phone };
        
        const userName = document.getElementById('userName');
        if (userName) {
            userName.textContent = `Welcome, ${fullName}!`;
        }
        
        showMainApp();
        showStatusMessage('Login successful! Welcome to BrickRate.', 'success');
        
        // Reset button
        if (btnText && btnLoader) {
            btnText.classList.remove('hidden');
            btnLoader.classList.add('hidden');
        }
        loginBtn.disabled = false;
    }, 1500);
}

// Handle Logout
function handleLogout() {
    console.log('Logout clicked');
    currentState.user = null;
    resetCalculator();
    showLoginPage();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
}

// Initialize Dropdowns
function initializeDropdowns() {
    const houseTypeSelect = document.getElementById('houseType');
    if (!houseTypeSelect) return;
    
    // Clear existing options first
    houseTypeSelect.innerHTML = '<option value="">Select house type</option>';
    
    // Populate house types
    Object.keys(appData.houseTypes).forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = `${type} - ${appData.houseTypes[type].description}`;
        houseTypeSelect.appendChild(option);
    });
    
    console.log('House type dropdown initialized');
}

// City Search Functions
function handleCitySearch(e) {
    const query = e.target.value.toLowerCase();
    console.log('City search:', query);
    
    if (query.length === 0) {
        filteredCities = [...appData.cities];
        currentState.city = '';
    } else {
        filteredCities = appData.cities.filter(city => 
            city.toLowerCase().includes(query)
        );
        
        // Auto-select if exact match
        const exactMatch = appData.cities.find(city => 
            city.toLowerCase() === query.toLowerCase()
        );
        if (exactMatch) {
            currentState.city = exactMatch;
            console.log('Exact match found:', exactMatch);
        } else {
            currentState.city = '';
        }
    }
    
    updateCityDropdown();
    updateCalculations();
}

function showCityDropdown() {
    const cityDropdown = document.getElementById('cityDropdown');
    if (cityDropdown) {
        cityDropdown.classList.remove('hidden');
        updateCityDropdown();
    }
}

function hideCityDropdown(e) {
    const cityDropdown = document.getElementById('cityDropdown');
    if (cityDropdown && !e.target.closest('.search-container')) {
        cityDropdown.classList.add('hidden');
    }
}

function updateCityDropdown() {
    const cityDropdown = document.getElementById('cityDropdown');
    if (!cityDropdown) return;
    
    cityDropdown.innerHTML = '';
    
    const displayCities = filteredCities.slice(0, 10);
    
    displayCities.forEach(city => {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.textContent = city;
        div.addEventListener('click', () => selectCity(city));
        cityDropdown.appendChild(div);
    });
    
    if (filteredCities.length > 10) {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.textContent = `... and ${filteredCities.length - 10} more cities`;
        div.style.fontStyle = 'italic';
        div.style.color = 'var(--color-text-secondary)';
        cityDropdown.appendChild(div);
    }
    
    if (filteredCities.length === 0) {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.textContent = 'No cities found';
        div.style.fontStyle = 'italic';
        div.style.color = 'var(--color-text-secondary)';
        cityDropdown.appendChild(div);
    }
}

function selectCity(city) {
    const citySearch = document.getElementById('citySearch');
    const cityDropdown = document.getElementById('cityDropdown');
    
    if (citySearch && cityDropdown) {
        citySearch.value = city;
        currentState.city = city;
        cityDropdown.classList.add('hidden');
        console.log('City selected:', city);
        updateCalculations();
    }
}

// Dimension and Calculation Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function toggleDimensionMode(mode) {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const dimensionInputs = document.getElementById('dimensionInputs');
    const areaInput = document.getElementById('areaInput');
    
    if (!toggleBtns || !dimensionInputs || !areaInput) return;
    
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-mode="${mode}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    if (mode === 'dimensions') {
        dimensionInputs.classList.remove('hidden');
        areaInput.classList.add('hidden');
        calculateFromDimensions();
    } else {
        dimensionInputs.classList.add('hidden');
        areaInput.classList.remove('hidden');
        calculateFromArea();
    }
    
    console.log('Dimension mode changed to:', mode);
}

function calculateFromDimensions() {
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    
    if (!lengthInput || !widthInput) return;
    
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    currentState.area = length * width;
    updateAreaDisplay();
    updateCalculations();
    
    console.log('Area calculated from dimensions:', currentState.area);
}

function calculateFromArea() {
    const totalAreaInput = document.getElementById('totalArea');
    if (!totalAreaInput) return;
    
    currentState.area = parseFloat(totalAreaInput.value) || 0;
    updateAreaDisplay();
    updateCalculations();
    
    console.log('Area set directly:', currentState.area);
}

function updateAreaDisplay() {
    const calculatedAreaDisplay = document.getElementById('calculatedArea');
    if (!calculatedAreaDisplay) return;
    
    const areaDisplay = calculatedAreaDisplay.querySelector('.area-display strong');
    if (areaDisplay) {
        areaDisplay.textContent = `${currentState.area.toLocaleString()} sq ft`;
    }
}

function selectQuality(quality) {
    const qualityOptions = document.querySelectorAll('.quality-option');
    if (!qualityOptions) return;
    
    qualityOptions.forEach(option => option.classList.remove('selected'));
    const selectedOption = document.querySelector(`[data-quality="${quality}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    currentState.quality = quality;
    console.log('Quality selected:', quality);
    updateCalculations();
    updateMaterialCompanies();
}

// Material Company Functions
function selectMaterialTab(material) {
    const companyTabs = document.querySelectorAll('.company-tab');
    if (!companyTabs) return;
    
    companyTabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`[data-material="${material}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    currentState.selectedMaterial = material;
    updateMaterialCompanies();
}

function updateMaterialCompanies() {
    const companyContent = document.getElementById('companyContent');
    if (!currentState.quality || !currentState.selectedMaterial || !companyContent) return;
    
    const companies = appData.companies[currentState.selectedMaterial];
    companyContent.innerHTML = '';
    
    companies.forEach(company => {
        const price = company[currentState.quality];
        const unit = getMaterialUnit(currentState.selectedMaterial);
        
        const div = document.createElement('div');
        div.className = 'company-item slide-in';
        div.innerHTML = `
            <div class="company-info">
                <h4>${company.name}</h4>
                <p>Quality: ${currentState.quality.charAt(0).toUpperCase() + currentState.quality.slice(1)}</p>
            </div>
            <div class="company-pricing">
                <span class="company-price">₹${price}</span>
                <span class="company-unit">per ${unit}</span>
            </div>
        `;
        companyContent.appendChild(div);
    });
}

function getMaterialUnit(material) {
    const units = {
        cement: 'bag (50kg)',
        steel: 'kg',
        bricks: 'piece'
    };
    return units[material] || 'unit';
}

// Update Calculations - FIXED to handle house type changes properly
function updateCalculations() {
    if (currentState.isCalculating) return;
    
    if (!currentState.area || !currentState.city || !currentState.quality) {
        resetDisplay();
        return;
    }

    console.log('Updating calculations:', { 
        area: currentState.area, 
        city: currentState.city, 
        quality: currentState.quality,
        houseType: currentState.houseType
    });

    currentState.isCalculating = true;

    // Get city tier
    let cityTier = 'tier3'; // Default
    if (appData.cityRates.tier1.includes(currentState.city)) {
        cityTier = 'tier1';
    } else if (appData.cityRates.tier2.includes(currentState.city)) {
        cityTier = 'tier2';
    }

    // Get base cost per square foot
    let baseCostPerSqft = appData.cityRates.baseCosts[cityTier][currentState.quality];
    
    // Apply house type multiplier
    if (currentState.houseType) {
        const houseTypeMultiplier = getHouseTypeMultiplier(currentState.houseType);
        baseCostPerSqft = Math.round(baseCostPerSqft * houseTypeMultiplier);
        console.log('House type multiplier applied:', houseTypeMultiplier, 'New rate:', baseCostPerSqft);
    }
    
    currentState.costPerSqft = baseCostPerSqft;
    currentState.totalCost = Math.round(currentState.area * currentState.costPerSqft);

    calculateBreakdown();
    updateDisplay();
    
    currentState.isCalculating = false;
    
    console.log('Calculations updated:', {
        costPerSqft: currentState.costPerSqft,
        totalCost: currentState.totalCost
    });
}

// Get House Type Multiplier
function getHouseTypeMultiplier(houseType) {
    const multipliers = {
        "1BHK": 0.90,    // 10% less complex
        "2BHK": 1.00,    // Base multiplier
        "3BHK": 1.10,    // 10% more complex
        "4BHK": 1.25,    // 25% more complex
        "Villa": 1.40,   // 40% more complex (luxury features)
        "Kothi": 1.30    // 30% more complex
    };
    return multipliers[houseType] || 1.00;
}

function calculateBreakdown() {
    const total = currentState.totalCost;
    
    currentState.breakdown = {
        materials: Math.round(total * appData.breakdownPercentages.materials),
        labor: Math.round(total * appData.breakdownPercentages.labor),
        architect: Math.round(total * appData.breakdownPercentages.architect),
        misc: Math.round(total * appData.breakdownPercentages.misc)
    };

    const materialsCost = currentState.breakdown.materials;
    currentState.materialBreakdown = {
        cement: Math.round(materialsCost * appData.materialBreakdown.cement),
        steel: Math.round(materialsCost * appData.materialBreakdown.steel),
        bricks: Math.round(materialsCost * appData.materialBreakdown.bricks),
        sand: Math.round(materialsCost * appData.materialBreakdown.sand),
        others: Math.round(materialsCost * appData.materialBreakdown.others)
    };
}

function updateDisplay() {
    const totalCostElement = document.getElementById('totalCost');
    const costPerSqftElement = document.getElementById('costPerSqft');
    
    if (!totalCostElement || !costPerSqftElement) return;
    
    totalCostElement.textContent = formatCurrency(currentState.totalCost);
    costPerSqftElement.textContent = `₹${currentState.costPerSqft.toLocaleString()}`;

    if (currentState.totalCost > 0) {
        const materialsAmountEl = document.getElementById('materialsAmount');
        const laborAmountEl = document.getElementById('laborAmount');
        const architectAmountEl = document.getElementById('architectAmount');
        const miscAmountEl = document.getElementById('miscAmount');
        
        if (materialsAmountEl) materialsAmountEl.textContent = formatCurrency(currentState.breakdown.materials);
        if (laborAmountEl) laborAmountEl.textContent = formatCurrency(currentState.breakdown.labor);
        if (architectAmountEl) architectAmountEl.textContent = formatCurrency(currentState.breakdown.architect);
        if (miscAmountEl) miscAmountEl.textContent = formatCurrency(currentState.breakdown.misc);

        updateBreakdownChart();
        updateMaterialCompanies();
        
        const estimateSummary = document.getElementById('estimateSummary');
        if (estimateSummary) {
            estimateSummary.classList.add('fade-in');
        }
    }
}

function resetDisplay() {
    const totalCostElement = document.getElementById('totalCost');
    const costPerSqftElement = document.getElementById('costPerSqft');
    
    if (totalCostElement) totalCostElement.textContent = '₹0';
    if (costPerSqftElement) costPerSqftElement.textContent = '₹0';
    
    const amountElements = document.querySelectorAll('.breakdown-amount');
    amountElements.forEach(el => el.textContent = '₹0');

    if (breakdownChart) {
        breakdownChart.destroy();
        breakdownChart = null;
    }
    
    const companyContent = document.getElementById('companyContent');
    if (companyContent) {
        companyContent.innerHTML = '';
    }
}

function updateBreakdownChart() {
    const chartCanvas = document.getElementById('breakdownChart');
    if (!chartCanvas) return;
    
    const ctx = chartCanvas.getContext('2d');
    
    if (breakdownChart) {
        breakdownChart.destroy();
    }

    breakdownChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Materials', 'Labor', 'Architect', 'Miscellaneous'],
            datasets: [{
                data: [
                    currentState.breakdown.materials,
                    currentState.breakdown.labor,
                    currentState.breakdown.architect,
                    currentState.breakdown.misc
                ],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 3,
                borderColor: '#fff',
                hoverBorderWidth: 4,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            weight: 'medium'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = formatCurrency(context.parsed);
                            const percentage = Math.round((context.parsed / currentState.totalCost) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000
            }
        }
    });
}

// Email Functions
async function emailEstimate() {
    if (currentState.totalCost === 0) {
        showStatusMessage('Please complete all fields to email estimate.', 'error');
        return;
    }
    
    if (!currentState.user) {
        showStatusMessage('Please log in to email estimates.', 'error');
        return;
    }

    showEmailConfirmationModal();
}

function showEmailConfirmationModal() {
    const modal = document.createElement('div');
    modal.className = 'email-modal';
    modal.innerHTML = `
        <div class="email-modal-content">
            <h3>📧 Send Detailed Report</h3>
            <p>We'll send a comprehensive construction cost estimate report to:</p>
            <p><strong>${currentState.user.email}</strong></p>
            <p>The report will include:</p>
            <ul>
                <li>Complete cost breakdown</li>
                <li>Material company comparisons</li>
                <li>Quality specifications</li>
                <li>Project summary</li>
            </ul>
            <div class="email-modal-buttons">
                <button class="btn btn--secondary" onclick="closeEmailModal()">Cancel</button>
                <button class="btn btn--primary" onclick="confirmEmailSend()">Send Report</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeEmailModal();
        }
    });
}

function closeEmailModal() {
    const modal = document.querySelector('.email-modal');
    if (modal) {
        modal.remove();
    }
}

async function confirmEmailSend() {
    closeEmailModal();
    
    const emailBtn = document.getElementById('emailEstimate');
    const btnText = emailBtn ? emailBtn.querySelector('.btn-text') : null;
    const btnLoader = emailBtn ? emailBtn.querySelector('.btn-loader') : null;
    
    showStatusMessage('📧 Preparing your detailed report...', 'info');
    if (btnText && btnLoader) {
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');
    }
    if (emailBtn) emailBtn.disabled = true;

    try {
        setTimeout(() => {
            showStatusMessage('✅ Detailed estimate report sent successfully to your email!', 'success');
            showEmailSuccessModal();
        }, 2000);
        
    } catch (error) {
        console.error('Email sending error:', error);
        showStatusMessage('❌ Failed to send email. Please try again.', 'error');
    } finally {
        if (btnText && btnLoader) {
            btnText.classList.remove('hidden');
            btnLoader.classList.add('hidden');
        }
        if (emailBtn) emailBtn.disabled = false;
    }
}

function showEmailSuccessModal() {
    const modal = document.createElement('div');
    modal.className = 'email-modal';
    modal.innerHTML = `
        <div class="email-modal-content">
            <h3>✅ Email Sent Successfully!</h3>
            <p>Your detailed construction estimate report has been sent to:</p>
            <p><strong>${currentState.user.email}</strong></p>
            <p>Please check your inbox (and spam folder) within the next few minutes.</p>
            <p><small>Quote ID: ${generateQuoteId()}</small></p>
            <div class="email-modal-buttons">
                <button class="btn btn--primary" onclick="closeEmailModal()">Got it!</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        closeEmailModal();
    }, 10000);
}

// Utility Functions
function formatCurrency(amount) {
    if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(1)} L`;
    } else if (amount >= 1000) {
        return `₹${(amount / 1000).toFixed(0)}K`;
    } else {
        return `₹${Math.round(amount).toLocaleString()}`;
    }
}

function shareEstimate() {
    if (currentState.totalCost === 0) {
        showStatusMessage('Please complete all fields to share estimate.', 'error');
        return;
    }

    const shareText = `BrickRate Construction Estimate: ${formatCurrency(currentState.totalCost)} for ${currentState.area} sq ft ${currentState.houseType || 'construction'} in ${currentState.city} (${currentState.quality} quality)`;

    if (navigator.share && navigator.canShare) {
        const shareData = {
            title: 'BrickRate Construction Estimate',
            text: shareText,
            url: window.location.href
        };

        navigator.share(shareData).then(() => {
            showStatusMessage('✅ Estimate shared successfully!', 'success');
        }).catch((error) => {
            console.log('Error sharing:', error);
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showStatusMessage('📋 Estimate copied to clipboard!', 'success');
        }).catch(() => {
            showStatusMessage('❌ Unable to copy to clipboard. Please copy manually.', 'error');
        });
    } else {
        // Fallback method
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showStatusMessage('📋 Estimate copied to clipboard!', 'success');
        } catch (err) {
            showStatusMessage('❌ Unable to copy to clipboard. Please copy manually.', 'error');
        }
        document.body.removeChild(textArea);
    }
}

function saveQuote() {
    if (currentState.totalCost === 0) {
        showStatusMessage('Please complete all fields to save quote.', 'error');
        return;
    }

    const saveBtn = document.getElementById('saveQuote');
    const originalText = saveBtn ? saveBtn.textContent : '';
    if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.textContent = '💾 Saving...';
    }
    
    setTimeout(() => {
        const quoteId = generateQuoteId();
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
        }
        showStatusMessage(`✅ Quote saved successfully! Quote ID: ${quoteId}`, 'success');
    }, 1000);
}

function generateQuoteId() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substr(2, 3).toUpperCase();
    return `BR${timestamp}${random}`;
}

function showStatusMessage(message, type) {
    const existingMessages = document.querySelectorAll('.status-message');
    existingMessages.forEach(msg => msg.remove());

    const statusDiv = document.createElement('div');
    statusDiv.className = `status-message status-message--${type} fade-in`;
    statusDiv.textContent = message;

    const resultsPanel = document.querySelector('.results-panel .card__body');
    if (resultsPanel) {
        resultsPanel.insertBefore(statusDiv, resultsPanel.firstChild);
    } else {
        const loginCard = document.querySelector('.login-card');
        if (loginCard) {
            loginCard.insertBefore(statusDiv, loginCard.firstChild);
        }
    }

    setTimeout(() => {
        if (statusDiv.parentNode) {
            statusDiv.remove();
        }
    }, 5000);
}

function resetCalculator() {
    currentState = {
        user: null,
        area: 0,
        city: '',
        houseType: '',
        quality: '',
        totalCost: 0,
        costPerSqft: 0,
        breakdown: {},
        materialBreakdown: {},
        isCalculating: false,
        selectedMaterial: 'cement'
    };
    
    // Reset form fields
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const totalAreaInput = document.getElementById('totalArea');
    const citySearch = document.getElementById('citySearch');
    const houseTypeSelect = document.getElementById('houseType');
    
    if (lengthInput) lengthInput.value = '';
    if (widthInput) widthInput.value = '';
    if (totalAreaInput) totalAreaInput.value = '';
    if (citySearch) citySearch.value = '';
    if (houseTypeSelect) houseTypeSelect.value = '';
    
    // Reset quality selection
    const qualityOptions = document.querySelectorAll('.quality-option');
    if (qualityOptions) {
        qualityOptions.forEach(option => option.classList.remove('selected'));
    }
    
    resetDisplay();
}

// Make functions globally available for modal buttons
window.closeEmailModal = closeEmailModal;
window.confirmEmailSend = confirmEmailSend;
