import { RenderMode, ServerRoute } from '@angular/ssr';

const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'videos', renderMode: RenderMode.Prerender },
  {
    path: 'video/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ],
  },
  { path: '**', renderMode: RenderMode.Client },
];

export default serverRoutes;
