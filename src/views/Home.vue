<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center py-12 sm:py-16 lg:py-0">
        <!-- Background with overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Content -->
          <div class="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div class="space-y-4 lg:space-y-6">
              <h1 
                data-aos="fade-up" 
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {{ t('home.hero.title') }}
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="200"
                class="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {{ t('home.hero.subtitle') }}
              </p>
            </div>
          
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <router-link to="/contact" class="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2">
                <button>
                  {{ t('home.hero.startProject') }}
                </button>
              </router-link>
              <a 
                href="#services" 
                class="px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-10 text-white rounded-lg hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg">
                {{ t('home.hero.discoverServices') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Illustration -->
          <div class="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div class="relative z-10">
              <!-- Main Device -->
              <div class="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 sm:h-64 flex items-center justify-center">
                  <div class="text-center space-y-4">
                    <div class="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br white rounded-xl mx-auto flex items-center justify-center">
                      <img src="../assets/images/logo_transparent.png" class="w-16 sm:w-28" alt="logo">
                    </div>
                    <div class="space-y-2">
                      <div class="h-2 sm:h-3 bg-gray-300 rounded w-20 sm:w-24 mx-auto"></div>
                      <div class="h-1.5 sm:h-2 bg-gray-200 rounded w-12 sm:w-16 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Cards -->
              <div class="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl shadow-lg p-2 sm:p-4 transform -rotate-12">
                <div class="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg class="h-5 sm:h-8 w-5 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div class="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg p-2 sm:p-4 transform -rotate-12">
                <div class="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <svg class="h-5 sm:h-8 w-5 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div class="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-xl shadow-lg p-2 sm:p-4 transform rotate-12">
                <div class="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg class="h-5 sm:h-8 w-5 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div class="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white rounded-xl shadow-lg p-2 sm:p-4 transform rotate-12">
                <div class="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <svg class="h-5 sm:h-8 w-5 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

            </div>
            
            <!-- Background Elements -->
            <div class="absolute inset-0 -z-10">
              <div class="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full"></div>
              <div class="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 w-10 sm:w-16 h-10 sm:h-16 bg-orange-300/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="services"></div>
    <!-- Services Section -->
    <section id="services" class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            data-aos="fade-up"
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {{ t('home.solutions.title') }}
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {{ t('home.solutions.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div data-aos="fade-up" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div class="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <component :is="WrenchScrewdriverIcon" class="h-8 w-8 sm:h-10 sm:w-10 text-white"/>
              </div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{{ t('services.support') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 flex-grow leading-relaxed">{{ t('services.support_sub') }}</p>
              <router-link 
                to="/technical-support"
                class="inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors group-hover:translate-x-2 transform text-sm sm:text-base">
                <span class="mr-2">Explorer</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
          <div data-aos="fade-up" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div class="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <component :is="CodeBracketIcon" class="h-8 w-8 sm:h-10 sm:w-10 text-white"/>
              </div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{{ t('services.development') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 flex-grow leading-relaxed">{{ t('services.development_sub') }}</p>
              <router-link 
                to="/app-development"
                class="inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors group-hover:translate-x-2 transform text-sm sm:text-base">
                <span class="mr-2">Explorer</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
          <div data-aos="fade-up" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div class="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <component :is="PaintBrushIcon" class="h-8 w-8 sm:h-10 sm:w-10 text-white"/>
              </div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{{ t('services.graphicDesign') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 flex-grow leading-relaxed">{{ t('services.graphicDesign_sub') }}</p>
              <router-link 
                to="/graphic-design"
                class="inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors group-hover:translate-x-2 transform text-sm sm:text-base">
                <span class="mr-2">Explorer</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
          <div data-aos="fade-up" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div class="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <component :is="MegaphoneIcon" class="h-8 w-8 sm:h-10 sm:w-10 text-white"/>
              </div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{{ t('services.digitalMarketing') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 flex-grow leading-relaxed">{{ t('services.digitalMarketing_sub') }}</p>
              <router-link 
                to="/digital-marketing"
                class="inline-flex items-center text-primary font-semibold hover:text-orange-600 transition-colors group-hover:translate-x-2 transform text-sm sm:text-base">
                <span class="mr-2">Explorer</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
  <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Titre -->
    <div class="text-center mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
        {{ t('home.partners.title') }}
      </h2>
      <p class="text-base sm:text-lg text-gray-600 px-4">
        {{ t('home.partners.subtitle') }}
      </p>
    </div>

    <!-- Grille des partenaires -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
      <!-- Partenaire -->
      <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-md transition duration-300 group">
        <div class="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
          <img src="../assets/images/Avocat Dabo.png" alt="Avocat Dabo" class="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <p class="text-gray-700 font-medium text-xs sm:text-sm text-center">Avocat Dabo</p>
      </div>

      <!-- Partenaire -->
      <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-md transition duration-300 group">
        <div class="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
          <img src="../assets/images/Global PC.png" alt="Global PC" class="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <p class="text-gray-700 font-medium text-xs sm:text-sm text-center">Global PC</p>
      </div>

      <!-- Partenaire -->
      <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-md transition duration-300 group">
        <div class="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
          <img src="../assets/images/hanh travel.jpg" alt="Hanh Travel" class="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <p class="text-gray-700 font-medium text-xs sm:text-sm text-center">Hanh Travel</p>
      </div>

      <!-- Partenaire -->
      <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-md transition duration-300 group">
        <div class="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
          <img src="../assets/images/chandelier.jpg" alt="MONCHANDELIER YESHUA INC." class="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <p class="text-gray-700 font-medium text-xs sm:text-sm text-center">MONCHANDELIER YESHUA INC.</p>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-12 sm:mt-16 lg:mt-20 text-center px-4">
      <div class="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-white max-w-4xl mx-auto">
        <h3 class="text-xl sm:text-2xl font-bold mb-3">
          {{ t('home.partners.become') }}
        </h3>
        <p class="text-base sm:text-lg mb-6 opacity-90">
          {{ t('home.partners.adviser') }}
        </p>
        <router-link to="/contact">
          <button class="bg-white text-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-300 text-sm sm:text-base">
            {{ t('nav.contactUs') }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</section>


    <!-- Features Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 
            data-aos="fade-up"
            class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 mb-4"
          >
            {{ t('home.why.title') }}
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            {{ t('home.why.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="(feature, index) in features"
            :key="feature.key"
            class="relative group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden sm:col-span-1"
            :class="{ 'sm:col-span-2 lg:col-span-1': index === 2 && features.length === 3 }"
            data-aos="fade-up"
            :data-aos-delay="200 * (index + 1)"
          >
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Icon Container -->
            <div class="relative">
              <div class="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <component 
                  :is="feature.icon" 
                  class="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-orange-600 transition-colors duration-300"
                />
              </div>
              
              <!-- Content -->
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                {{ t(`home.why.${feature.key}.title`) }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {{ t(`home.why.${feature.key}.description`) }}
              </p>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-tl-full transform translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-12 group-hover:translate-x-6 sm:group-hover:translate-x-8 group-hover:translate-y-6 sm:group-hover:translate-y-8 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <ProjectModal
      :is-open="isProjectModalOpen"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {CodeBracketIcon, WrenchScrewdriverIcon, PaintBrushIcon, MegaphoneIcon, LightBulbIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import ProjectModal from '../components/ProjectModal.vue'

const { t } = useI18n()


const features = [
  {
    key: 'innovation',
    icon: LightBulbIcon
  },
  {
    key: 'expertise',
    icon: UserGroupIcon
  },
  {
    key: 'results',
    icon: ChartBarIcon
  }
]

// Project data
const projects = [
  {
    title: 'Logistic',
    shortDescription: 'Site web pour une entreprise de logistique internationale',
    description: 'Une plateforme complete de gestion logistique permettant le suivi en temps reel des expeditions, la gestion des entrepots et l\'optimisation des routes de livraison.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    features: [
      'Suivi en temps reel des expeditions',
      'Tableau de bord analytique',
      'Gestion des entrepots',
      'Optimisation des routes',
      'Interface multilingue'
    ],
    link: '#'
  },
  {
    title: 'Winterfell',
    shortDescription: 'Plateforme de reservation pour activites outdoor',
    description: 'Une plateforme innovante permettant la reservation d\'activites de plein air, avec gestion des disponibilites en temps reel et systeme de paiement securise.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=2000',
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Stripe', 'Redis'],
    features: [
      'Reservation en ligne',
      'Gestion des disponibilites',
      'Paiement securise',
      'Systeme de notation',
      'Notifications en temps reel'
    ],
    link: '#'
  },
  {
    title: 'Assistante virtuelle',
    shortDescription: 'Service d\'assistance administrative en ligne',
    description: 'Une application web permettant aux entreprises de deleguer leurs taches administratives a des assistants virtuels qualifies.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    features: [
      'Attribution automatique des taches',
      'Suivi du temps',
      'Chat en temps reel',
      'Facturation automatique',
      'Rapports detailles'
    ],
    link: '#'
  }
]

// Modal state
const isProjectModalOpen = ref(false)
const selectedProject = ref(projects[0])

const openProject = (project) => {
  selectedProject.value = project
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}
</style>