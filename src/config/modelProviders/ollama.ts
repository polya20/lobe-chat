import { ModelProviderCard } from '@/types/llm';

const Ollama: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Gemma 7B',
      functionCall: false,
      id: 'gemma:7b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Gemma 2B',
      functionCall: false,
      id: 'gemma',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 13B',
      functionCall: false,
      hidden: true,
      id: 'llama2:13b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 7B',
      functionCall: false,
      id: 'llama2',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 13B',
      functionCall: false,
      hidden: true,
      id: 'llama2:13b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 70B',
      functionCall: false,
      hidden: true,
      id: 'llama2:70b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Code Llama 7B',
      functionCall: false,
      id: 'codellama',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 34B',
      functionCall: false,
      hidden: true,
      id: 'codellama:34b',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 70B',
      functionCall: false,
      hidden: true,
      id: 'codellama:70b',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 7B (Python)',
      functionCall: false,
      hidden: true,
      id: 'codellama:python',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Mistral',
      functionCall: false,
      id: 'mistral',
      tokens: 4800,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 7B',
      functionCall: false,
      id: 'qwen:7b-chat',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 14B',
      functionCall: false,
      hidden: true,
      id: 'qwen:14b-chat',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 70B',
      functionCall: false,
      hidden: true,
      id: 'qwen:70b-chat',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'LLaVA 7B',
      functionCall: false,
      hidden: true,
      id: 'llava',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'LLaVA 13B',
      functionCall: false,
      hidden: true,
      id: 'llava:13b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'LLaVA 34B',
      functionCall: false,
      hidden: true,
      id: 'llava:34b',
      tokens: 4000,
      vision: false,
    },
  ],
  id: 'ollama',
};

export default Ollama;
