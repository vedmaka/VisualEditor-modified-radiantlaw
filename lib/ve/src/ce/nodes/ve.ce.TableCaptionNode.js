/*!
 * VisualEditor ContentEditable TableCaptionNode class.
 *
 * @copyright 2011-2014 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * ContentEditable table caption node.
 *
 * @class
 * @extends ve.ce.BranchNode
 * @constructor
 * @param {ve.dm.TableCaptionNode} model Model to observe
 * @param {Object} [config] Configuration options
 */
ve.ce.TableCaptionNode = function VeCeTableCaptionNode( model, config ) {
	// Parent constructor
	ve.ce.BranchNode.call( this, model, config );
};

/* Inheritance */

OO.inheritClass( ve.ce.TableCaptionNode, ve.ce.BranchNode );

/* Static Properties */

ve.ce.TableCaptionNode.static.name = 'tableCaption';

ve.ce.TableCaptionNode.static.tagName = 'caption';

/* Registration */

ve.ce.nodeFactory.register( ve.ce.TableCaptionNode );
