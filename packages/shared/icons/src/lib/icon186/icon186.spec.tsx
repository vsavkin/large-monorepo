import { render } from '@testing-library/react';

import Icon186 from './icon186';

describe('Icon186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon186 />);
    expect(baseElement).toBeTruthy();
  });
});
