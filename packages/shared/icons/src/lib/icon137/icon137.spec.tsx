import { render } from '@testing-library/react';

import Icon137 from './icon137';

describe('Icon137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon137 />);
    expect(baseElement).toBeTruthy();
  });
});
