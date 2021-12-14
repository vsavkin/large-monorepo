import { render } from '@testing-library/react';

import Icon205 from './icon205';

describe('Icon205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon205 />);
    expect(baseElement).toBeTruthy();
  });
});
