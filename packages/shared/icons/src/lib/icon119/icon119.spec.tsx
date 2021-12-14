import { render } from '@testing-library/react';

import Icon119 from './icon119';

describe('Icon119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon119 />);
    expect(baseElement).toBeTruthy();
  });
});
