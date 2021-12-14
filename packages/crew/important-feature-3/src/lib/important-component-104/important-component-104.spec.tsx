import { render } from '@testing-library/react';

import ImportantComponent104 from './important-component-104';

describe('ImportantComponent104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent104 />);
    expect(baseElement).toBeTruthy();
  });
});
