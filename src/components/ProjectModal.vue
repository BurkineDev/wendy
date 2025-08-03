<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
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
            <DialogPanel class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              <div class="relative">
                <button
                  @click="closeModal"
                  class="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon class="h-6 w-6" />
                </button>

                <div class="aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <img 
                    :src="project.image" 
                    :alt="project.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <DialogTitle as="h3" class="text-2xl font-bold text-gray-900 mb-4">
                  {{ project.title }}
                </DialogTitle>

                <div class="prose max-w-none">
                  <p class="text-lg text-gray-600 mb-6">{{ project.description }}</p>
                  
                  <h4 class="text-xl font-semibold mb-4">Technologies utilisées</h4>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <h4 class="text-xl font-semibold mb-4">Fonctionnalités clés</h4>
                  <ul class="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li v-for="feature in project.features" :key="feature">
                      {{ feature }}
                    </li>
                  </ul>

                  <div class="flex justify-end mt-8">
                    <a 
                      :href="project.link" 
                      target="_blank"
                      class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Visiter le site
                      <ArrowTopRightOnSquareIcon class="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  link: string
}

interface Props {
  isOpen: boolean
  project: Project
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>