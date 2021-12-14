import { render } from '@testing-library/react';

import Icon40 from './icon40';

describe('Icon40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon40 />);
    expect(baseElement).toBeTruthy();
  });
});
