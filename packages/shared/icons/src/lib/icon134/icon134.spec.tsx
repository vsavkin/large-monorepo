import { render } from '@testing-library/react';

import Icon134 from './icon134';

describe('Icon134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon134 />);
    expect(baseElement).toBeTruthy();
  });
});
