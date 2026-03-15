export interface Wallpaper {
	id: string;
	src: string;
}

export interface Gradient {
	id: string;
	value: string;
}

export interface AudioTrack {
	id: string;
	label: string;
	src: string;
}

export const WALLPAPERS: Wallpaper[] = Array.from({ length: 18 }, (_, i) => ({
	id: `wallpaper-${i + 1}`,
	src: `wallpapers/wallpaper${i + 1}.jpg`,
}));

export const GRADIENTS: Gradient[] = [
	{
		id: "gradient-1",
		value:
			"linear-gradient( 111.6deg,  rgba(114,167,232,1) 9.4%, rgba(253,129,82,1) 43.9%, rgba(253,129,82,1) 54.8%, rgba(249,202,86,1) 86.3% )",
	},
	{ id: "gradient-2", value: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" },
	{
		id: "gradient-3",
		value:
			"radial-gradient( circle farthest-corner at 3.2% 49.6%,  rgba(80,12,139,0.87) 0%, rgba(161,10,144,0.72) 83.6% )",
	},
	{
		id: "gradient-4",
		value:
			"linear-gradient( 111.6deg,  rgba(0,56,68,1) 0%, rgba(163,217,185,1) 51.5%, rgba(231, 148, 6, 1) 88.6% )",
	},
	{
		id: "gradient-5",
		value: "linear-gradient( 107.7deg,  rgba(235,230,44,0.55) 8.4%, rgba(252,152,15,1) 90.3% )",
	},
	{
		id: "gradient-6",
		value: "linear-gradient( 91deg,  rgba(72,154,78,1) 5.2%, rgba(251,206,70,1) 95.9% )",
	},
	{
		id: "gradient-7",
		value:
			"radial-gradient( circle farthest-corner at 10% 20%,  rgba(2,37,78,1) 0%, rgba(4,56,126,1) 19.7%, rgba(85,245,221,1) 100.2% )",
	},
	{
		id: "gradient-8",
		value: "linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )",
	},
	{ id: "gradient-9", value: "linear-gradient(135deg, #FBC8B4, #2447B1)" },
	{ id: "gradient-10", value: "linear-gradient(109.6deg, #F635A6, #36D860)" },
	{ id: "gradient-11", value: "linear-gradient(90deg, #FF0101, #4DFF01)" },
	{ id: "gradient-12", value: "linear-gradient(315deg, #EC0101, #5044A9)" },
	{ id: "gradient-13", value: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)" },
	{ id: "gradient-14", value: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)" },
	{
		id: "gradient-15",
		value:
			"linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
	},
	{ id: "gradient-16", value: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" },
	{ id: "gradient-17", value: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)" },
	{
		id: "gradient-18",
		value:
			"linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
	},
	{ id: "gradient-19", value: "linear-gradient(to right, #fa709a 0%, #fee140 100%)" },
	{ id: "gradient-20", value: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" },
	{ id: "gradient-21", value: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)" },
	{
		id: "gradient-22",
		value: "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
	},
	{ id: "gradient-23", value: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)" },
	{ id: "gradient-24", value: "linear-gradient(to right, #0acffe 0%, #495aff 100%)" },
];

export const DEFAULT_BG_MUSIC_VOLUME = 0.3;

// Add more presets by dropping MP3 in public/audio/ and adding an entry here
export const AUDIO_TRACKS: AudioTrack[] = [
	{
		id: "upbeat-happy-corporate",
		label: "Upbeat Happy Corporate",
		src: "audio/upbeat-happy-corporate.mp3",
	},
];

export function resolveAudioTrackSrc(id: string): string {
	return AUDIO_TRACKS.find((t) => t.id === id)?.src ?? `audio/${id}.mp3`;
}

/**
 * Resolve a backgroundMusic value (track ID or data URL) to a fetch-able URL.
 * Used by both preview (VideoPlayback) and export (VideoEditor).
 */
export async function resolveBackgroundMusicUrl(
	backgroundMusic: string,
	getAssetPath: (rel: string) => Promise<string>,
): Promise<string> {
	if (backgroundMusic.startsWith("data:")) {
		return backgroundMusic;
	}
	return getAssetPath(resolveAudioTrackSrc(backgroundMusic));
}
