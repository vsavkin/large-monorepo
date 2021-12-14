import { render } from '@testing-library/react';

import ImportantComponent160 from './important-component-160';

describe('ImportantComponent160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent160 />);
    expect(baseElement).toBeTruthy();
  });
});
