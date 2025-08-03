<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div class="md:w-1/2" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              {{ t('technicalSupport.hero.title') }}
            </h1>
            <p class="text-xl text-white mb-8">
              {{ t('technicalSupport.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="btn-primary inline-block">
                {{ t('technicalSupport.description.process.cta_button') }}
              </router-link>
              <button 
                @click="scrollToModels"
                class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                {{ t('home.hero.discoverServices') }}
                <ChevronDownIcon class="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
          <div class="hidden md:block md:w-1/2" data-aos="fade-left">
            <div class="relative">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-3xl blur-3xl"></div>
            
                  <div class="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <div class="flex items-center justify-between mb-6">
                      <h3 class="text-gray-800 font-bold text-xl">Support Analytics</h3>
                      <div class="flex space-x-2">
                        <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  
                  <div class="space-y-14">
                    
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-4">
                        <div class="text-3xl font-bold text-orange-600">1,247</div>
                        <div class="text-sm text-orange-700">Requests</div>
                      </div>
                      <div class="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4">
                        <div class="text-3xl font-bold text-blue-600">98.7%</div>
                        <div class="text-sm text-blue-700">Success Rate</div>
                      </div>
                    </div>
                  
                    
                    <div class="grid grid-cols-3 gap-3">
                      <div class="text-center">
                        <div class="w-12 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span class="text-white font-bold">⚡</span>
                        </div>
                        <div class="text-sm font-semibold text-gray-800">15min</div>
                        <div class="text-xs text-gray-600">Response</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span class="text-white font-bold">📊</span>
                        </div>
                        <div class="text-sm font-semibold text-gray-800">99.9%</div>
                        <div class="text-xs text-gray-600">Uptime</div>
                      </div>
                      <div class="text-center">
                        <div class="w-12 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span class="text-white font-bold">✓</span>
                        </div>
                        <div class="text-sm font-semibold text-gray-800">500+</div>
                        <div class="text-xs text-gray-600">Daily</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="modelsSection"></div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          class="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up">
          {{ t('technicalSupport.description.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('technicalSupport.description.audtroubleshootit.title') }}</h3>
            <p class="text-gray-600">{{ t('technicalSupport.description.audtroubleshootit.description') }}</p>
          </div>

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('technicalSupport.description.security.title') }}</h3>
            <p class="text-gray-600">{{ t('technicalSupport.description.security.description') }}</p>
          </div>
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('technicalSupport.description.data.title') }}</h3>
            <p class="text-gray-600">{{ t('technicalSupport.description.data.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between md:space-x-12">
          <div class="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" 
              alt="Sécurité informatique" 
              class="rounded-lg shadow-xl"
            />
          </div>

          <div class="md:w-1/2" data-aos="fade-left">
            <h2 class="text-3xl font-bold mb-6">{{ t('technicalSupport.description.techno.title') }}</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('technicalSupport.description.techno.team') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('technicalSupport.description.techno.speed') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('technicalSupport.description.techno.solution') }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
      <div 
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white mb-8">
          {{ t('technicalSupport.description.process.cta') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
          {{ t('technicalSupport.description.process.cta_button') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'


const modelsSection = ref<HTMLElement | null>(null)


const { t } = useI18n()

const scrollToModels = () => {
  modelsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}
</style>