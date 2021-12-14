import { render } from '@testing-library/react';

import ImportantComponent137 from './important-component-137';

describe('ImportantComponent137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent137 />);
    expect(baseElement).toBeTruthy();
  });
});
