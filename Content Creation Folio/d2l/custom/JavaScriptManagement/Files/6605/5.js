// Assignment Folder Declaration
var cd_windowPath = window.location.pathname;
console.log('cd_windowPath > ', cd_windowPath);
if (/d2l\/lms\/dropbox\/user\/folder_submit_files\.d2l/.test(cd_windowPath)) {
	console.log('Flie Submit Window is Open');
	window.addEventListener('load', function () {
		if ($('h2.vui-heading-2:contains("Submit Assignment")').length) {
			$('h2.vui-heading-2:contains("Submit Assignment")').after(
				'<div style="border: 1px solid #038294; border-radius: .5rem; margin-bottom: 1rem; overflow: hidden;">' +
					'<div style="padding: 0 30px;">' +
						'<h3 style="font-size: 1.2rem; color: #038294; font-weight: 700; margin: 1.5rem 0;">FILE SUBMISSION TYPES</h3>' +
						'<p style="margin-bottom: .5rem;">CloudDeakin dropbox accepts a wide range of file types. Please refer to your assessment instructions for specific requirements. </p>' +
						'<p style="margin-top: .5rem;">When Turnitin Originality report is in use, files need to be in accepted formats. See <a href="https://www.deakin.edu.au/students/help/about-clouddeakin/help-guides/assessment/plagiarism" title="Student Help for Plagiarism" target="_blank">Turnitin | Students (deakin.edu.au)</a> for more information.</p>' +
						'<h3 style="font-size: 1.2rem; color: #038294; font-weight: 700; margin: 1.5rem 0;">ACADEMIC INTEGRITY</h3>' +
						'<p style="margin-bottom: .5rem;">As a Deakin student you must undertake your academic work with integrity and honesty. You should check your assessment draft prior to submission using the self-check Turnitin dropbox. The following resources are available to assist you:</p>' +
						'<ul style="margin-top: .5rem;">' +
							'<li><a href="https://www.deakin.edu.au/students/studying/academic-integrity" title="Academic Integrity" target="_blank">Academic Integrity</a> information and support</li>' +
							'<li><a href="http://www.deakin.edu.au/students/study-support" title="Study Support" target="_blank">Study Support</a></li>' +
							'<li><a href="https://www.dusa.org.au/get-help/academic-integrity-breaches" title="DUSA support website" target="_blank">DUSA support website</a> and <a href="https://youtu.be/UkDjX5sy6Q8" title="YouTube Video" target="_blank">short video</a> from a student perspective</li>' +
							'<li><a href="https://www.deakin.edu.au/students/help/about-clouddeakin/help-guides/assessment/plagiarism" title="Understanding TurnItIn" target="_blank">Understanding TurnItIn</a></li>' +
						'</ul>' +
					'</div>' +
					'<div style="padding: 24px 30px; background: #038294; color: #fff;">' +
						'<h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 1.5rem 0;">Are you submitting the correct file?</h3>' +
						'<p style="margin-bottom: .5rem;">It is your responsibility to ensure you are submitting the correct file in an accepted format and that your file opens properly and is fully readable. Check that you have submitted the correct file by viewing your submission history under <span style="font-weight: bold">Assessment > Assignments > Submission History</span> in the navigation bar. Incorrect submission is not a ground for being granted special consideration.</p>' +
					'</div>' +
					'<div style="padding: 0 30px;">' +
						'<p>Please remember that assessment work, or parts of assessment work, cannot be re-submitted for a different assessment task without the written approval of the Unit Chair of this unit. This includes work submitted for assessment at another academic institution. If you wish to reuse or extend parts of previously submitted work then you should discuss this with the Unit Chair prior to the submission date.</p>' +
					'</div>' +
					'<div style="padding: 24px 30px; background: #038294; color: #fff;">' +
						'<h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 1.5rem 0;">Declaration</h3>' +
						'<p style="margin: 1rem 0 0 0;">By clicking on the SUBMIT button, I certify that the attached work is entirely my own (or where submitted to meet the requirements of an approved group assignment is the work of the group), except where work quoted or paraphrased is acknowledged in the text. I also certify that it has not been previously submitted for assessment in this or any other unit or course unless permission for this has been granted by the Unit Chair of this unit. I agree that Deakin University may make and retain copies of this work for the purposes of marking and review, and may submit this work to an external academic integrity breach service who may retain a copy for future breach detection but will not release it or use it for any other purpose.</p>' +
					'</div>' +
				'</div>'
			);
		} else if ($('h2.vui-heading-2:contains("Soumettre les fichiers")').length) {
			$('h2.vui-heading-2:contains("Soumettre les fichiers")').after(
				'<div style="border: 1px solid #038294; border-radius: .5rem; margin-bottom: 1rem; overflow: hidden;">' +
					'<div style="padding: 0 30px;">' +
						'<h3 style="font-size: 1.2rem; color: #038294; font-weight: 700; margin: 1.5rem 0;">TYPES DE FICHIERS À SOUMETTRE</h3>' +
						'<p style="margin-bottom: .5rem;">La boîte de dépôt CloudDeakin accepte un grand nombre de types de fichiers. Veuillez vous référer aux instructions de votre évaluation afin de prendre en compte les exigences requises.</p>' +
						'<p style="margin-top: .5rem;">Lorsque le rapport d\'originalité Turnitin est utilisé, les fichiers doivent être dans les formats autorisés. Vous pouvez consulter cette page (en anglais) <a href="https://www.deakin.edu.au/students/help/about-clouddeakin/help-guides/assessment/plagiarism" title="Student Help for Plagiarism" target="_blank">Turnitin | Students (deakin.edu.au)</a> pour plus d\'informations.</p>' +
						'<h3 style="font-size: 1.2rem; color: #038294; font-weight: 700; margin: 1.5rem 0;">HONNÊTETÉ INTELLECTUELLE</h3>' +
						'<p style="margin-bottom: .5rem;">En tant qu\'étudiant à Deakin, vous devez effectuer vos évaluations avec intégrité et honnêteté. Vous devez également vérifier votre évaluation avant de la rendre en utilisant la boîte de dépôt Turnitin d\'auto-vérification. Les ressources suivantes (en anglais) sont disponibles pour vous aider:</p>' +
						'<ul style="margin-top: .5rem;">' +
							'<li><a href="https://www.deakin.edu.au/students/studying/academic-integrity" title="Academic Integrity" target="_blank">Academic Integrity</a> information et soutien</li>' +
							'<li><a href="http://www.deakin.edu.au/students/study-support" title="Study Support" target="_blank">Study Support</a></li>' +
							'<li><a href="https://www.dusa.org.au/get-help/academic-integrity-breaches" title="DUSA support website" target="_blank">DUSA support website</a> et <a href="https://youtu.be/UkDjX5sy6Q8" title="YouTube Video" target="_blank">short video</a> d\'un point de vue étudiant</li>' +
							'<li><a href="https://www.deakin.edu.au/students/help/about-clouddeakin/help-guides/assessment/plagiarism" title="Understanding TurnItIn" target="_blank">Understanding TurnItIn</a></li>' +
						'</ul>' +
					'</div>' +
					'<div style="padding: 24px 30px; background: #038294; color: #fff;">' +
						'<h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 1.5rem 0;">Avez-vous soumis le bon fichier?</h3>' +
						'<p style="margin-bottom: .5rem;">Il est de votre responsabilité de vous assurer que vous avez soumis le bon fichier dans un des formats autorisés et que votre fichier s\'ouvre correctement et est entièrement lisible. Vous pouvez vérifier que vous avez soumis le bon fichier en consultant l\'historique de vos soumissions dans la rubrique <span style="font-weight: bold">Évaluations > Casier de dépôt > Afficher l\'historique</span>. Une soumission incorrecte ne constitue pas un motif pour bénéficier d\'une considération spéciale.</p>' +
					'</div>' +
					'<div style="padding: 0 30px;">' +
						'<p>Veuillez noter qu\'une évaluation, ou une partie d\'une évaluation, ne peut être soumise à nouveau pour une autre évaluation sans l\'accord écrit du/de la responsable de l\'unité. Cela inclut les évaluations rendues dans le contexte d\'un cursus réalisé dans une autre université. Si vous souhaitez réutiliser ou approfondir des parties d\'une évaluation déjà soumise, vous devez en discuter avec le/la responsible de l\'unité avant la date de soumission.</p>' +
					'</div>' +
					'<div style="padding: 24px 30px; background: #038294; color: #fff;">' +
						'<h3 style="font-size: 1.2rem; font-weight: 700; margin: 0 0 1.5rem 0;">Déclaration</h3>' +
						'<p style="margin: 1rem 0 0 0;">En cliquant sur SOUMETTRE, je confirme que l\'évaluation ci-jointe est entièrement le résultat de mon travail personnel (ou s\'il s\'agit d\'une évaluation de groupe, celle-ci est entièrement le résultat du travail du groupe) sauf dans le cas d\'une citation ou paraphrase référencée dans le texte. Je confirme également qu\'il ne s\'agit pas d\'une évaluation déjà soumise dans cette unité ou dans toute autre unité, à moins d\'avoir reçu la permission du/de la responsable de l\'unité. J\'accepte que Deakin University fasse et conserve des copies de cette évaluation afin de la noter et de la vérifier, et soumette cette évaluation à un système externe de détection de plagiat ou de collusion. Ce système pourra garder une copie de cette évaluation afin de détecter tout acte de plagiat ou de collusion dans le futur. Cette évaluation ne sera pas utilisée ou partagée pour tout autre motif.</p>' +
					'</div>' +
				'</div>'
			);
		}
	});
}
