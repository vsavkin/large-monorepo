import { render } from '@testing-library/react';

import Icon154 from './icon154';

describe('Icon154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon154 />);
    expect(baseElement).toBeTruthy();
  });
});
