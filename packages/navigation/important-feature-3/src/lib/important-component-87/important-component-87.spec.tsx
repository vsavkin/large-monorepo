import { render } from '@testing-library/react';

import ImportantComponent87 from './important-component-87';

describe('ImportantComponent87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent87 />);
    expect(baseElement).toBeTruthy();
  });
});
