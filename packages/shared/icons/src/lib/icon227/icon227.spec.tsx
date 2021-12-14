import { render } from '@testing-library/react';

import Icon227 from './icon227';

describe('Icon227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon227 />);
    expect(baseElement).toBeTruthy();
  });
});
