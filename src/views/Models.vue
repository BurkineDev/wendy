<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div class="md:w-1/2" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              {{ t('models.hero.title') }}
            </h1>
            <p class="text-xl text-white mb-8">
              {{ t('models.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="btn-primary inline-flex items-center justify-center">
                {{ t('models.hero.cta') }}
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </router-link>
              <button 
                @click="scrollToModels"
                class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                {{ t('models.hero.browse') }}
                <ChevronDownIcon class="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
          <div class="hidden md:block md:w-1/2" data-aos="fade-left">
            <div class="relative h-96 perspective-1000">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl"></div>
              
              <div class="absolute top-8 left-8 w-48 h-32 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div class="p-3 h-full">
                  <div class="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-2"></div>
                  <div class="space-y-1">
                    <div class="h-2 bg-gray-200 rounded w-full"></div>
                    <div class="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div class="h-2 bg-gray-200 rounded w-3/5"></div>
                  </div>
                  <div class="mt-3 grid grid-cols-2 gap-1">
                    <div class="h-8 bg-gray-100 rounded"></div>
                    <div class="h-8 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              <div class="absolute top-4 right-12 w-52 h-36 bg-white rounded-lg shadow-2xl transform -rotate-2 hover:-rotate-6 transition-transform duration-500">
                <div class="p-3 h-full">
                  <div class="h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded mb-2"></div>
                  <div class="grid grid-cols-3 gap-1 mb-2">
                    <div class="h-6 bg-gray-200 rounded"></div>
                    <div class="h-6 bg-gray-200 rounded"></div>
                    <div class="h-6 bg-gray-200 rounded"></div>
                  </div>
                  <div class="space-y-1">
                    <div class="h-2 bg-gray-100 rounded"></div>
                    <div class="h-2 bg-gray-100 rounded w-4/5"></div>
                  </div>
                  <div class="mt-2 h-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded"></div>
                </div>
              </div>

              <div class="absolute bottom-8 left-16 w-44 h-28 bg-white rounded-lg shadow-2xl transform rotate-1 hover:rotate-3 transition-transform duration-500">
                <div class="p-3 h-full">
                  <div class="h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded mb-2"></div>
                  <div class="grid grid-cols-2 gap-1 mb-1">
                    <div class="h-8 bg-gray-200 rounded"></div>
                    <div class="h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div class="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>

              <div class="absolute bottom-12 right-8 w-44 h-28 bg-white rounded-lg shadow-2xl transform -rotate-1 hover:-rotate-4 transition-transform duration-500">
                <div class="p-3 h-full">
                  <div class="h-3 bg-gradient-to-r from-orange-400 to-red-600 rounded mb-2"></div>
                  <div class="grid grid-cols-2 gap-1 mb-2">
                    <div class="h-10 bg-gray-200 rounded"></div>
                    <div class="h-10 bg-gray-200 rounded"></div>
                  </div>
                  <div class="grid grid-cols-3 gap-1">
                    <div class="h-6 bg-gray-200 rounded"></div>
                    <div class="h-6 bg-gray-200 rounded"></div>
                    <div class="h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-white rounded-xl shadow-2xl border-2 border-gray-100">
                <div class="p-4 h-full">
                  <div class="h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded mb-3"></div>
                  <div class="space-y-2 mb-3">
                    <div class="h-2 bg-gray-200 rounded"></div>
                    <div class="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div class="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded"></div>
                    <div class="h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
                  </div>
                </div>
              </div>

              <div class="absolute top-16 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div class="absolute top-1/3 right-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
              <div class="text-2xl font-bold text-primary">{{ models.length }}+</div>
              <div class="text-sm text-gray-600">{{ t('models.hero.templates') }}</div>
            </div>
          </div>
        </div>
      </div>
      <div ref="modelsSection"></div>
    </section>
    
    <!-- Categories Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="[
              selectedCategory === category 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            ]">
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Models Grid Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            {{ t('models.showcase.title') }}
          </h2>
          <p 
            class="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ t('models.showcase.subtitle') }}
          </p>
        </div>

        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div 
            v-for="(model, index) in filteredModels" 
            :key="model.title"
            class="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Image Container with Aspect Ratio -->
            <div class="relative aspect-[4/3] overflow-hidden rounded-t-xl">
              <img 
                :src="model.image" 
                :alt="model.title"
                class="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Category Badge -->
              <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary shadow-lg">
                {{ model.category }}
              </div>
            </div>

            <!-- Content Container -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {{ model.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2 h-12">
                {{ model.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(tech, techIndex) in model.technologies" 
                  :key="techIndex"
                  class="px-3 py-1 bg-primary/5 rounded-full text-sm font-medium text-primary/80 hover:bg-primary/10 transition-colors duration-300"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Action Button -->
              <div class="pt-4 border-t border-gray-100">
                <button 
                  @click="openPreview(model)"
                  class="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-50 hover:bg-primary/5 text-primary rounded-lg transition-all duration-300 group"
                >
                  <span class="font-medium">{{ t('models.preview') }}</span>
                  <ArrowTopRightOnSquareIcon class="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <div class="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 class="text-xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  {{ model.title }}
                </h3>
                <p class="text-gray-200 mb-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {{ model.description }}
                </p>
                <div class="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <span 
                    v-for="(tech, techIndex) in model.technologies" 
                    :key="techIndex"
                    class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <component :is="feature.icon" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
      <div 
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <h2 class="text-3xl font-bold text-white mb-8">
          {{ t('models.cta.title') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
        >
          {{ t('models.cta.button') }}
          <ArrowRightIcon class="ml-2 h-5 w-5" />
        </router-link>
      </div>
    </section>

    <!-- Preview Modal -->
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
          <div class="fixed inset-0 bg-black/75" />
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
              <DialogPanel class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div v-if="selectedModel" class="relative">
                  <!-- Close Button -->
                  <button
                    @click="closePreview"
                    class="absolute right-4 top-4 z-10 p-2 text-white bg-black/20 hover:bg-black/30 rounded-full transition-colors"
                  >
                    <XMarkIcon class="h-6 w-6" />
                  </button>

                  <!-- Image Header -->
                  <div class="relative h-72 w-full overflow-hidden">
                    <img 
                      :src="selectedModel.image" 
                      :alt="selectedModel.title"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                      <span class="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                        {{ selectedModel.category }}
                      </span>
                      <h2 class="text-3xl font-bold text-white mt-3">
                        {{ selectedModel.title }}
                      </h2>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="p-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <!-- Main Content -->
                      <div class="md:col-span-2 space-y-6">
                        <div>
                          <h3 class="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                          <p class="text-gray-600">{{ selectedModel.description }}</p>
                        </div>

                        <div>
                          <h3 class="text-lg font-semibold text-gray-900 mb-3">Caractéristiques principales</h3>
                          <ul class="space-y-2">
                            <li v-for="(feature, index) in selectedModel.features" :key="index" class="flex items-start">
                              <CheckCircleIcon class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span class="text-gray-600">{{ feature }}</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 class="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h3>
                          <div class="flex flex-wrap gap-2">
                            <span 
                              v-for="tech in selectedModel.technologies" 
                              :key="tech"
                              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              {{ tech }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Sidebar -->
                      <div class="space-y-6">
                        <div class="bg-gray-50 rounded-xl p-6">
                          <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations</h3>
                          <dl class="space-y-3">
                            <div>
                              <dt class="text-sm text-gray-500">Catégorie</dt>
                              <dd class="text-gray-900">{{ selectedModel.category }}</dd>
                            </div>
                            <div>
                              <dt class="text-sm text-gray-500">Temps d'installation</dt>
                              <dd class="text-gray-900">2-3 jours</dd>
                            </div>
                            <div>
                              <dt class="text-sm text-gray-500">Support inclus</dt>
                              <dd class="text-gray-900">6 mois</dd>
                            </div>
                          </dl>
                        </div>

                        <router-link 
                          to="/contact" 
                          class="block w-full px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          {{ t('models.contact') }}
                        </router-link>
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
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
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
const selectedCategory = ref('Tous')

const categories = ['Tous', 'E-commerce', 'Corporate', 'Portfolio', 'Blog']

const features = [
  {
    icon: CubeIcon,
    title: 'Modèles Personnalisables',
    description: 'Adaptez facilement nos modèles à votre image de marque et vos besoins spécifiques.'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Installation Facile',
    description: 'Mise en place rapide et configuration intuitive pour un démarrage immédiat.'
  },
  {
    icon: SparklesIcon,
    title: 'Design Moderne',
    description: 'Interfaces élégantes et responsive pour une expérience utilisateur optimale.'
  }
]



const models = [
  {
    title: 'Muscle Monitoring',
    description: 'Site de monitoring musculaire avec interface moderne et responsive. Solution complète pour les professionnels du sport et de la santé.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'CSS3', 'JavaScript'],
    category: 'Corporate',
    features: [
      'Tableau de bord personnalisable',
      'Suivi des performances en temps réel',
      'Rapports détaillés exportables',
      'Interface responsive'
    ]
  },
  {
    title: 'Condos à Montréal',
    description: 'Plateforme immobilière pour la vente de condos de luxe. Interface élégante avec recherche avancée et visualisation 3D.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    category: 'E-commerce',
    features: [
      'Recherche avancée par filtres',
      'Visites virtuelles 3D',
      'Système de réservation en ligne',
      'Intégration CRM immobilier'
    ]
  },
  {
    title: 'Vallée CPA',
    description: 'Site vitrine professionnel pour cabinet comptable. Design épuré et moderne avec focus sur l\'accessibilité et la conversion.',
    image: 'https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['WordPress', 'Bootstrap', 'jQuery'],
    category: 'Corporate',
    features: [
      'Prise de rendez-vous en ligne',
      'Espace client sécurisé',
      'Blog d\'actualités fiscales',
      'Calculateurs financiers interactifs'
    ]
  },
  {
    title: 'Simplicité Familiale',
    description: 'Plateforme de services et conseils pour familles. Interface conviviale et contenu riche en ressources éducatives.',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Elementor', 'PHP'],
    category: 'Blog',
    features: [
      'Forums de discussion',
      'Ressources téléchargeables',
      'Calendrier d\'événements',
      'Newsletter personnalisée'
    ]
  },
  {
    title: 'Énergie et Cie',
    description: 'Site corporatif pour entreprise énergétique. Design moderne avec focus sur la durabilité et l\'innovation.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'SASS', 'JavaScript'],
    category: 'Corporate',
    features: [
      'Calculateur d\'empreinte carbone',
      'Carte interactive des installations',
      'Rapports de durabilité',
      'Section carrières intégrée'
    ]
  },
  {
    title: 'Native Music',
    description: 'Portfolio musical avec intégration audio avancée. Expérience immersive pour les artistes et les fans.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
    technologies: ['WordPress', 'Web Audio API', 'React'],
    category: 'Portfolio',
    features: [
      'Lecteur audio personnalisé',
      'Visualisation des ondes sonores',
      'Galerie média interactive',
      'Billetterie d\'événements'
    ]
  }
]

const filteredModels = computed(() => {
  if (selectedCategory.value === 'Tous') return models
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

.prose {
  @apply max-w-none;
}

/* Add line clamping for descriptions */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth image loading */
img {
  @apply transition-opacity duration-300;
}

img.loading {
  @apply opacity-0;
}

img.loaded {
  @apply opacity-100;
}
</style>