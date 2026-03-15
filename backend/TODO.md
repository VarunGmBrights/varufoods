# TODO: Fix Food Images Display

## Steps:
1. **[COMPLETE]** Edit server.js: Added `app.use('/images', express.static(path.join(process.cwd(), 'uploads')));`.
2. **[PENDING]** Test locally: Run `npm run server` in backend dir. Visit http://localhost:4000/images/[your-filename.png] or upload via frontend first.
3. **[PENDING]** Commit/push: `cd /Users/varungm/Desktop/varufoods-frontend-backend && git add backend/server.js && git commit -m "Fix: Add /images static route for food images" && git push origin master`.
4. **[PENDING]** Render auto-deploys; reload https://varufoods.onrender.com/ and check images/console.
5. **[PENDING]** Mark complete.
