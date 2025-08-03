<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
        <!-- Background with overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Content -->
          <div class="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div class="space-y-4 lg:space-y-6" data-aos="fade-up">
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {{ t('models.hero.title') }}
              </h1>
              <p class="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {{ t('models.hero.subtitle') }}
              </p>
            </div>
          
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="200">
              <router-link to="/contact" class="group relative overflow-hidden bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                <span>{{ t('models.hero.cta') }}</span>
                <ArrowRightIcon class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </router-link>
              <button 
                @click="scrollToModels"
                class="group px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-10 text-white rounded-xl hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg backdrop-blur-sm border border-white/20">
                {{ t('models.hero.browse') }}
                <ChevronDownIcon class="h-5 w-5 animate-bounce group-hover:animate-pulse" />
              </button>
            </div>
          </div>
          
          <!-- Illustration -->
          <div class="relative mt-8 lg:mt-0 order-first lg:order-last" data-aos="fade-left" data-aos-delay="300">
            <div class="relative z-10">
              <!-- Main Device with Enhanced Animation -->
              <div class="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-48 sm:h-64 lg:h-80 flex items-center justify-center relative overflow-hidden">
                  <!-- Animated Background Pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-4 left-4 w-16 h-16 bg-primary rounded-full animate-pulse"></div>
                    <div class="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                    <div class="absolute top-1/2 left-1/2 w-8 h-8 bg-orange-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
                  </div>
                  
                  <div class="text-center space-y-4 relative z-10">
                    <div class="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary to-orange-600 rounded-2xl mx-auto flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <img src="../assets/images/logo_transparent.png" class="w-12 sm:w-16 lg:w-20 filter brightness-0 invert" alt="logo">
                    </div>
                    <div class="space-y-3">
                      <div class="h-3 sm:h-4 bg-gray-300 rounded-full w-32 sm:w-40 mx-auto animate-pulse"></div>
                      <div class="h-2 sm:h-3 bg-gray-200 rounded-full w-20 sm:w-24 mx-auto animate-pulse" style="animation-delay: 0.2s"></div>
                      <div class="grid grid-cols-2 gap-2 mt-4">
                        <div class="h-8 sm:h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg animate-pulse" style="animation-delay: 0.4s"></div>
                        <div class="h-8 sm:h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg animate-pulse" style="animation-delay: 0.6s"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Enhanced Floating Cards -->
              <div class="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                <div class="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 sm:h-8 w-6 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div class="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110" style="animation-delay: 0.2s">
                <div class="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 sm:h-8 w-6 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div class="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-white rounded-2xl shadow-xl p-3 sm:p-4 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110" style="animation-delay: 0.4s">
                <div class="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 sm:h-8 w-6 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div class="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 bg-white rounded-2xl shadow-xl p-3 sm:p-4 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110" style="animation-delay: 0.6s">
                <div class="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <svg class="h-6 sm:h-8 w-6 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>

            </div>
            
            <!-- Enhanced Background Elements -->
            <div class="absolute inset-0 -z-10">
              <div class="absolute top-8 sm:top-12 right-8 sm:right-12 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div class="absolute bottom-12 sm:bottom-16 left-12 sm:left-16 w-16 sm:w-24 h-16 sm:h-24 bg-orange-300/20 rounded-full animate-pulse" style="animation-delay: 1s"></div>
              <div class="absolute top-1/2 right-1/4 w-4 sm:w-6 h-4 sm:h-6 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 2s"></div>
            </div>

            <!-- Enhanced Stats Badge -->
            <div class="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div class="text-center">
                <div class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">{{ models.length }}+</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium">{{ t('models.hero.templates') }}</div>
                <div class="flex justify-center space-x-1 mt-2">
                  <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                  <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="modelsSection"></div>
    </section>
    
    <!-- Enhanced Categories Section -->
    <section class="py-8 sm:py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            v-for="category in categories.value"
            :key="category"
            @click="selectedCategory = category"
            class="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
            :class="[
              selectedCategory === category 
                ? 'bg-gradient-to-r from-primary to-orange-600 text-white shadow-xl shadow-primary/30' 
                : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
            ]">
            <span class="relative z-10">{{ category }}</span>
            <div 
              v-if="selectedCategory === category"
              class="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Enhanced Models Grid Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6"
            data-aos="fade-up"
          >
            {{ t('models.showcase.title') }}
          </h2>
          <p 
            class="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ t('models.showcase.subtitle') }}
          </p>
        </div>

        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 transform translate-y-8"
          enter-to-class="opacity-100 scale-100 transform translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 transform translate-y-0"
          leave-to-class="opacity-0 scale-95 transform translate-y-8"
          move-class="transition-all duration-500 ease-in-out"
        >
          <div 
            v-for="(model, index) in filteredModels" 
            :key="model.title"
            class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 hover:border-primary/20 overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Enhanced Image Container -->
            <div class="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
              <img 
                :src="model.image" 
                :alt="model.title"
                class="absolute inset-0 w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <!-- Enhanced Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-primary shadow-lg border border-white/50 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {{ model.category }}
              </div>

              <!-- Hover Preview Button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button 
                  @click="openPreview(model)"
                  class="bg-white/90 backdrop-blur-sm text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>{{ t('models.preview') }}</span>
                  <ArrowTopRightOnSquareIcon class="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <!-- Enhanced Content Container -->
            <div class="p-5 sm:p-6 lg:p-8">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {{ model.title }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                {{ model.description }}
              </p>
              
              <!-- Enhanced Technologies -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="(tech, techIndex) in model.technologies.slice(0, 3)" 
                  :key="techIndex"
                  class="px-3 py-1 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full text-xs sm:text-sm font-medium text-primary/80 hover:text-primary hover:scale-105 transition-all duration-300 border border-primary/20"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="model.technologies.length > 3"
                  class="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-500"
                >
                  +{{ model.technologies.length - 3 }}
                </span>
              </div>
              
              <!-- Enhanced Action Button -->
              <div class="pt-4 sm:pt-6 border-t border-gray-100">
                <button 
                  @click="openPreview(model)"
                  class="w-full group/btn relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary/10 hover:to-orange-500/10 text-gray-700 hover:text-primary rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 border border-gray-200 hover:border-primary/30 font-semibold text-sm sm:text-base"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <span>{{ t('models.preview') }}</span>
                    <ArrowTopRightOnSquareIcon class="h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                </button>
              </div>
            </div>

            <!-- Enhanced Decorative Elements -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </TransitionGroup>

        <!-- Enhanced Empty State -->
        <div v-if="filteredModels.length === 0" class="text-center py-16 sm:py-20">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-6-2.709V16.5A1.5 1.5 0 007.5 18h9a1.5 1.5 0 001.5-1.5v-3.209z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('models.modal.empty.title') }}</h3>
          <p class="text-gray-600">{{ t('models.modal.empty.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            {{ t('models.features.title') }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {{ t('models.features.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="feature.icon" class="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-orange-600 transition-colors duration-300" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
              {{ t(`models.features.${feature.key}.title`) }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              {{ t(`models.features.${feature.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style="animation-delay: 2s"></div>
      </div>
      
      <div 
        class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          {{ t('models.cta.title') }}
        </h2>
        <p class="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Transformez votre vision en réalité avec nos modèles professionnels et notre expertise technique.
        </p>
        <router-link 
          to="/contact" 
          class="group inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105 text-lg"
        >
          <span>{{ t('models.cta.button') }}</span>
          <ArrowRightIcon class="ml-3 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
        </router-link>
      </div>
    </section>

    <!-- Enhanced Preview Modal -->
    <TransitionRoot appear :show="isPreviewOpen" as="template">
      <Dialog as="div" @close="closePreview" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-6xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
                <div v-if="selectedModel" class="relative">
                  <!-- Enhanced Close Button -->
                  <button
                    @click="closePreview"
                    class="absolute right-4 sm:right-6 top-4 sm:top-6 z-20 p-2 sm:p-3 text-white bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 backdrop-blur-sm group"
                  >
                    <XMarkIcon class="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <!-- Enhanced Image Header -->
                  <div class="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
                    <img 
                      :src="selectedModel.image" 
                      :alt="selectedModel.title"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                      <div class="flex items-center gap-4 mb-4">
                        <span class="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-sm sm:text-base font-semibold rounded-full">
                          {{ selectedModel.category }}
                        </span>
                        <div class="flex space-x-1">
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                          <div class="w-2 h-2 bg-white/60 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                        </div>
                      </div>
                      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                        {{ selectedModel.title }}
                      </h2>
                      <p class="text-base sm:text-lg text-gray-200 max-w-3xl">
                        {{ selectedModel.description }}
                      </p>
                    </div>
                  </div>

                  <!-- Enhanced Content -->
                  <div class="p-6 sm:p-8 lg:p-10">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                      <!-- Main Content -->
                      <div class="lg:col-span-2 space-y-6 sm:space-y-8">
                        <div>
                          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                            <div class="w-1 h-8 bg-gradient-to-b from-primary to-orange-600 rounded-full"></div>
                            Caractéristiques principales
                          </h3>
                          <ul class="space-y-3 sm:space-y-4">
                            <li v-for="(feature, index) in selectedModel.features" :key="index" class="flex items-start group">
                              <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircleIcon class="h-4 w-4 text-white" />
                              </div>
                              <span class="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ feature }}</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                            <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                              {{ t('models.modal.mainFeatures') }}
                          </h3>
                          <div class="flex flex-wrap gap-3">
                            <span 
                              v-for="tech in selectedModel.technologies" 
                              :key="tech"
                              class="group px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-primary/10 hover:to-orange-500/10 text-gray-700 hover:text-primary rounded-xl text-sm sm:text-base font-medium transition-all duration-300 border border-gray-200 hover:border-primary/30 hover:scale-105"
                            >
                              {{ tech }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Enhanced Sidebar -->
                      <div class="space-y-6 sm:space-y-8">
                            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{{ t('models.modal.projectInfo') }}</h3>
                          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Informations projet</h3>
                          <dl class="space-y-4">
                                <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.modal.category') }}</dt>
                              <dt class="text-sm font-medium text-gray-500 mb-1">Catégorie</dt>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ selectedModel.category }}</dd>
                            </div>
                                <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.modal.installTime') }}</dt>
                                <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t('models.modal.installTimeValue') }}</dd>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">2-3 jours ouvrés</dd>
                            </div>
                                <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.modal.support') }}</dt>
                                <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t('models.modal.supportValue') }}</dd>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">6 mois gratuits</dd>
                            </div>
                                <dt class="text-sm font-medium text-gray-500 mb-1">{{ t('models.modal.customization') }}</dt>
                                <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ t('models.modal.customizationValue') }}</dd>
                              <dd class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Complète</dd>
                            </div>
                          </dl>
                        </div>

                        <div class="space-y-4">
                          <router-link 
                            to="/contact" 
                            class="group block w-full px-6 py-4 bg-gradient-to-r from-primary to-orange-600 text-white text-center font-bold rounded-xl hover:from-primary/90 hover:to-orange-600/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <span class="flex items-center justify-center gap-2">
                              {{ t('models.contact') }}
                              <ArrowRightIcon class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </router-link>

                          <button 
                            @click="closePreview"
                            class="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 font-semibold rounded-xl transition-all duration-300"
                              {{ t('models.modal.close') }}
                            Fermer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { 
  ArrowRightIcon, 
  ChevronDownIcon, 
  XMarkIcon, 
  ArrowTopRightOnSquareIcon,
  CubeIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

const { t } = useI18n()
const modelsSection = ref<HTMLElement | null>(null)
const selectedCategory = ref(t('models.categories.all'))

const categories = computed(() => [
  t('models.categories.all'),
  t('models.categories.ecommerce'), 
  t('models.categories.corporate'),
  t('models.categories.portfolio'),
  t('models.categories.blog')
])

const features = [
  {
    icon: CubeIcon,
    key: 'customizable'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    key: 'installation'
  },
  {
    icon: SparklesIcon,
    key: 'design'
  }
]

const models = [
  {
    title: 'Muscle Monitoring',
    description: 'Site de monitoring musculaire avec interface moderne et responsive. Solution complète pour les professionnels du sport et de la santé avec tableaux de bord analytiques.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'CSS3', 'JavaScript', 'MySQL'],
    category: 'Corporate',
    features: [
      'Tableau de bord personnalisable avec métriques en temps réel',
      'Suivi des performances musculaires et progression',
      'Rapports détaillés exportables en PDF/Excel',
      'Interface responsive optimisée mobile et tablette',
      'Intégration avec appareils de mesure IoT',
      'Système de notifications et alertes personnalisées'
    ]
  },
  {
    title: 'Condos à Montréal',
    description: 'Plateforme immobilière premium pour la vente de condos de luxe. Interface élégante avec recherche avancée, visualisation 3D et système de réservation intégré.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Vue.js'],
    category: 'E-commerce',
    features: [
      'Recherche avancée multi-critères avec filtres intelligents',
      'Visites virtuelles 3D haute définition',
      'Système de réservation en ligne sécurisé',
      'Intégration CRM immobilier professionnel',
      'Calculateur de financement hypothécaire',
      'Galerie photo/vidéo interactive avec zoom'
    ]
  },
  {
    title: 'Vallée CPA',
    description: 'Site vitrine professionnel pour cabinet comptable. Design épuré et moderne avec focus sur l\'accessibilité, la conversion client et la crédibilité.',
    image: 'https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['WordPress', 'Bootstrap', 'jQuery', 'PHP'],
    category: 'Corporate',
    features: [
      'Prise de rendez-vous en ligne avec agenda synchronisé',
      'Espace client sécurisé avec documents confidentiels',
      'Blog d\'actualités fiscales et conseils experts',
      'Calculateurs financiers interactifs personnalisés',
      'Formulaires de contact spécialisés par service',
      'Témoignages clients avec système de notation'
    ]
  },
  {
    title: 'Simplicité Familiale',
    description: 'Plateforme communautaire de services et conseils pour familles. Interface conviviale avec contenu riche, forums interactifs et ressources éducatives.',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Elementor', 'PHP', 'bbPress'],
    category: 'Blog',
    features: [
      'Forums de discussion modérés par catégories',
      'Bibliothèque de ressources téléchargeables',
      'Calendrier d\'événements familiaux interactif',
      'Newsletter personnalisée par tranche d\'âge',
      'Système de points et badges communautaires',
      'Chat en direct avec experts familiaux'
    ]
  },
  {
    title: 'Énergie et Cie',
    description: 'Site corporatif pour entreprise énergétique. Design moderne axé sur la durabilité, l\'innovation technologique et la transparence environnementale.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'SASS', 'JavaScript', 'D3.js'],
    category: 'Corporate',
    features: [
      'Calculateur d\'empreinte carbone interactif',
      'Carte interactive des installations avec données temps réel',
      'Rapports de durabilité avec visualisations dynamiques',
      'Section carrières avec candidatures en ligne',
      'Centre de presse avec communiqués archivés',
      'Dashboard client avec consommation énergétique'
    ]
  },
  {
    title: 'Native Music',
    description: 'Portfolio musical premium avec intégration audio avancée. Expérience immersive pour artistes avec streaming, vente en ligne et gestion de fans.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Web Audio API', 'React', 'Stripe'],
    category: 'Portfolio',
    features: [
      'Lecteur audio personnalisé avec playlists',
      'Visualisation des ondes sonores en temps réel',
      'Galerie média interactive avec lightbox',
      'Billetterie d\'événements avec places numérotées',
      'Boutique en ligne pour merchandising',
      'Système de fan club avec contenu exclusif'
    ]
  }
]

const filteredModels = computed(() => {
  if (selectedCategory.value === t('models.categories.all')) return models
  return models.filter(model => model.category === selectedCategory.value)
})

// Preview Modal
const isPreviewOpen = ref(false)
const selectedModel = ref(null)

const openPreview = (model) => {
  selectedModel.value = model
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

// Scroll to models section
const scrollToModels = () => {
  modelsSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}

/* Enhanced line clamping */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth image loading with blur effect */
img {
  @apply transition-all duration-500;
}

img[loading] {
  filter: blur(2px);
}

img:not([loading]) {
  filter: blur(0);
}

/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(237, 125, 50, 0.3); }
  50% { box-shadow: 0 0 30px rgba(237, 125, 50, 0.5); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #ed7d32;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #d35f1d;
}
</style>