ItemEvents.modification(event => {
	event.modify('usefulslime:slime_boots', item => {
		item.maxDamage = 300
	})
	event.modify('usefulslime:slime_sling', item => {
		item.maxDamage = 300
	})
})