import { render } from '@testing-library/react';

import Icon226 from './icon226';

describe('Icon226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon226 />);
    expect(baseElement).toBeTruthy();
  });
});
