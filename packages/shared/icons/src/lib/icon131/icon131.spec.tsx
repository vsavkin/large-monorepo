import { render } from '@testing-library/react';

import Icon131 from './icon131';

describe('Icon131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon131 />);
    expect(baseElement).toBeTruthy();
  });
});
