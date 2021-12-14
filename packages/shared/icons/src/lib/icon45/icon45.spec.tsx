import { render } from '@testing-library/react';

import Icon45 from './icon45';

describe('Icon45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon45 />);
    expect(baseElement).toBeTruthy();
  });
});
