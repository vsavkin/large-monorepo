import { render } from '@testing-library/react';

import ImportantComponent67 from './important-component-67';

describe('ImportantComponent67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent67 />);
    expect(baseElement).toBeTruthy();
  });
});
